import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map, tap } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateArticleService } from '@/app/create-article/services/create-article.service';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '@/app/create-article/store/actions/createArticle.action';
import { ArticleInterface } from '@/app/shared/types/article.interface';

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({
                errors: errorResponse.error.errors,
              }),
            );
          }),
        );
      }),
    ),
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap((action) => {
          this.router.navigate(['/articles', action.article.slug]);
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router,
  ) {}
}
