import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';
import {select, Store} from '@ngrx/store';
import {getArticleCommentsAction} from '@/app/shared/modules/article-comments/store/actions/getArticlleComments.action';
import {
  articleCommentsSelector,
  isLoadingSelector,
} from '@/app/shared/modules/article-comments/store/selectors';
import {deleteArticleCommentsAction} from '@/app/shared/modules/article-comments/store/actions/deleteArticleComment.action';
import {CurrentUserInterface} from '@/app/shared/types/currentUser.interface';
import {currentUserSelector} from '@/app/auth/store/selectors';

@Component({
  selector: 'ac-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.css'],
})
export class ArticleCommentsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  articleComments$: Observable<ArticleCommentInterface[]>;
  currentUser$: Observable<CurrentUserInterface>;

  @Input() slug: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  fetchData(): void {
    this.store.dispatch(getArticleCommentsAction({slug: this.slug}));
  }

  initializeValues(): void {
    this.articleComments$ = this.store.pipe(select(articleCommentsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  deleteArticleComment(commentId: number): void {
    this.store.dispatch(
      deleteArticleCommentsAction({commentId, slug: this.slug}),
    );
  }
}
