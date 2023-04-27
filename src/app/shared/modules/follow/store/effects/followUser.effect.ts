import {Actions, createEffect, ofType} from '@ngrx/effects';
import {FollowService} from '@sharedModules/follow/services/follow.service';
import {
  followUserAction,
  followUserActionFailure,
  followUserActionSuccess,
} from '@sharedModules/follow/store/actions/followUser.action';
import {catchError, map, of, switchMap} from 'rxjs';
import {Injectable} from "@angular/core";


@Injectable()
export class FollowUserEffect {
  followUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(followUserAction),
      switchMap(({slug, isFollowing}) => {
        const profile$ = isFollowing
          ? this.followService.unfollowUser(slug)
          : this.followService.followUser(slug);

        return profile$.pipe(
          map((profile) => {
            return followUserActionSuccess({profile});
          }),
          catchError(() => {
            return of(followUserActionFailure());
          }),
        );
      }),
    ),
  );
  constructor(
    private actions$: Actions,
    private followService: FollowService,
  ) {}
}
