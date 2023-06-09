import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, of, switchMap, map} from 'rxjs';

import {ArticleInterface} from '@/app/shared/types/article.interface';
import {ArticleService as SharedArticleService} from '@/app/shared/services/article.service';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '@/app/edit-article/store/actions/getArticle.action';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.sharedArticleService.getArticle(slug).pipe(
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
