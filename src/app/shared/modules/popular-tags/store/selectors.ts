import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { PopularTagsStateInterface } from '@/app/shared/modules/popular-tags/types/popularTagsState.interface';

export const popularTagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>('popularTags');

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.error
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.data
);
