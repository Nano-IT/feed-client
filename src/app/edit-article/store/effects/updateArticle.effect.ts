import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, of, switchMap, map, tap} from 'rxjs';

import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {ArticleInterface} from '@/app/shared/types/article.interface';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '@/app/edit-article/store/actions/updateArticle.action';
import {EditArticleService} from '@/app/edit-article/services/edit-article.service';

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({slug, articleInput}) => {
        return this.updateArticleService.editArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({article});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({
                errors: errorResponse.error.errors,
              }),
            );
          }),
        );
      }),
    ),
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap((action) => {
          this.router.navigate(['/articles', action.article.slug]);
        }),
      ),
    {dispatch: false},
  );

  constructor(
    private actions$: Actions,
    private updateArticleService: EditArticleService,
    private router: Router,
  ) {}
}
