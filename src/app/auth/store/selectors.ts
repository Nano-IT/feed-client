import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.validationErrors,
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isLoggedIn,
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => !state.isLoggedIn,
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.currentUser,
);

export const errorMessageSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.errorMessage,
);
