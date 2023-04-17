import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ArticleCommentsService} from '@/app/shared/modules/article-comments/services/article-comments.service';
import {catchError, map, of, switchMap} from 'rxjs';
import {
  deleteArticleCommentsAction,
  deleteArticleCommentsFailureAction,
  deleteArticleCommentsSuccessAction,
} from '@/app/shared/modules/article-comments/store/actions/deleteArticleComment.action';

@Injectable()
export class DeleteArticleCommentEffect {
  deleteArticleComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleCommentsAction),
      switchMap(({slug, commentId}) => {
        return this.getArticleCommentsService
          .deleteArticleComments(slug, commentId)
          .pipe(
            map(() => {
              return deleteArticleCommentsSuccessAction({commentId});
            }),
            catchError(() => {
              return of(deleteArticleCommentsFailureAction());
            }),
          );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private getArticleCommentsService: ArticleCommentsService,
  ) {}
}
