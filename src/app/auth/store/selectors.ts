import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => !state.isLoggedIn
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.currentUser
);
