import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PopularTagsStateInterface} from '@/app/shared/modules/popular-tags/types/popularTagsState.interface';

export const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsStateInterface>('popularTags');

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.isLoading,
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.error,
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.data,
);
