import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ArticleCommentsService} from '@/app/shared/modules/article-comments/services/article-comments.service';
import {
  getArticleCommentsAction,
  getArticleCommentsFailureAction,
  getArticleCommentsSuccessAction,
} from '@/app/shared/modules/article-comments/store/actions/getArticlleComments.action';
import {catchError, map, of, switchMap} from 'rxjs';

@Injectable()
export class GetArticleCommentsEffect {
  getArticleComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleCommentsAction),
      switchMap(({slug}) => {
        return this.getArticleCommentsService.getArticleComments(slug).pipe(
          map((comments) => {
            return getArticleCommentsSuccessAction({comments});
          }),
          catchError(() => {
            return of(getArticleCommentsFailureAction());
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
