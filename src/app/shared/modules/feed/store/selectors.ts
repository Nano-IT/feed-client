import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { FeedStateInterface } from '../types/feedState.interface';

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (state: FeedStateInterface) => state.isLoading
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (state: FeedStateInterface) => state.data
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (state: FeedStateInterface) => state.error
);
