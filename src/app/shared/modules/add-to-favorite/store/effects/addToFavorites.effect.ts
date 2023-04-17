import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddToFavoriteService } from '@/app/shared/modules/add-to-favorite/services/add-to-favorite.service';
import {
  addToFavoriteAction,
  addToFavoriteSuccessAction,
  addToFavoriteSuccessFailure,
} from '@/app/shared/modules/add-to-favorite/store/actions/addToFavorite.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { ArticleInterface } from '@/app/shared/types/article.interface';

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoriteAction),
      switchMap(({ slug, isFavorite }) => {
        const article$ = isFavorite
          ? this.addToFavoritesService.removeFromFavorite(slug)
          : this.addToFavoritesService.addToFavorite(slug);

        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoriteSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoriteSuccessFailure());
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoriteService,
  ) {}
}
