import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@sharedModules/follow/store/actionTypes';
import {ProfileInterface} from '@/app/shared/types/profile.interface';

export const followUserAction = createAction(
  ActionTypes.FOLLOW_USER,
  props<{slug: string; isFollowing: boolean}>(),
);

export const followUserActionSuccess = createAction(
  ActionTypes.FOLLOW_USER_SUCCESS,
  props<{profile: ProfileInterface}>(),
);

export const followUserActionFailure = createAction(
  ActionTypes.FOLLOW_USER_FAILURE,
);
