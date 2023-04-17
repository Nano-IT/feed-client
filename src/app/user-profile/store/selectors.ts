import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserProfileStateInterface} from "@/app/user-profile/types/userProfileState.interface";

export const userProfileFeatureSelector =
  createFeatureSelector<UserProfileStateInterface>('userProfile');

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.isLoading,
);

export const errorsSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.error,
);

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.data,
);
