import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map } from 'rxjs';
import {
  getPopularTagsAction, getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from '@/app/shared/modules/popular-tags/store/actions/popularTags.action';
import { PopularTagsService } from '@/app/shared/modules/popular-tags/services/popular-tags.service';
import {PopularTagType} from "@/app/shared/types/popularTag.type";

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getTags().pipe(
          map((popularTags: PopularTagType[] ) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
