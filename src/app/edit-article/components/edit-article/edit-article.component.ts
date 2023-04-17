import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {filter, map, Observable, Subscription} from 'rxjs';
import {ArticleInterface} from '@/app/shared/types/article.interface';
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '@/app/edit-article/store/selectors';
import {ActivatedRoute} from '@angular/router';
import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';
import {ArticleInputInterface} from '@/app/shared/types/articleInput.interface';
import {updateArticleAction} from '@/app/edit-article/store/actions/updateArticle.action';
import {getArticleAction} from '@/app/edit-article/store/actions/getArticle.action';

@Component({
  selector: 'ac-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
})
export class EditArticleComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isSubmitting$: Observable<boolean>;
  initialValues$: Observable<ArticleInputInterface | null>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  slug: string;
  paramsSubscription: Subscription;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          body: article.body,
          description: article.description,
          tagList: article.tagList,
        };
      }),
    );
  }

  initializeListeners(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    });
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({articleInput, slug: this.slug}));
  }
}
