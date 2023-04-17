import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, of, switchMap, map} from 'rxjs';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '@/app/article/store/actions/getArticle.action';
import {ArticleService as SharedArticleService} from '@/app/shared/services/article.service';
import {ArticleInterface} from '@/app/shared/types/article.interface';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap((action) => {
        return this.sharedArticleService.getArticle(action.slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article});
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
  ) {}
}
