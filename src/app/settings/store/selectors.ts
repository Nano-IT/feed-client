import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsStateInterface } from '@/app/settings/types/settingsState.interface';

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (state: SettingsStateInterface) => state.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (state: SettingsStateInterface) => state.validationErrors,
);
