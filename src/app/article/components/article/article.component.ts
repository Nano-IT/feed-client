import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getArticleAction} from '@/app/article/store/actions/getArticle.action';
import {
  errorSelector,
  articleSelector,
  isLoadingSelector,
} from '@/app/article/store/selectors';
import {combineLatest, map, Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ArticleInterface} from '@/app/shared/types/article.interface';
import {currentUserSelector} from '@/app/auth/store/selectors';
import {CurrentUserInterface} from '@/app/shared/types/currentUser.interface';
import {deleteArticleAction} from '@/app/article/store/actions/deleteArticle.action';

@Component({
  selector: 'ac-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  article: ArticleInterface | null;
  isAuthor$: Observable<boolean>;
  articleSubscription: Subscription;
  slug: string;

  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit() {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.articleSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null,
        ]) => {
          if (!article || !currentUser) {
            return false;
          }

          return article.author.username === currentUser.username;
        },
      ),
    );
  }

  initializeListeners(): void {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Record<string, any>) => {
        this.slug = params['slug'];
        this.fetchArticle();
      },
    );

    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article) => {
        this.article = article;
      });
  }

  fetchArticle(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}));
  }
}
