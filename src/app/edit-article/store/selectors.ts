import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UpdateArticleStateInterface} from '@/app/edit-article/types/updateArticleState.interface';

export const updateArticleFeatureSelector =
  createFeatureSelector<UpdateArticleStateInterface>('updateArticle');

export const isSubmittingSelector = createSelector(
  updateArticleFeatureSelector,
  (state: UpdateArticleStateInterface) => state.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  updateArticleFeatureSelector,
  (state: UpdateArticleStateInterface) => state.validationErrors,
);

export const isLoadingSelector = createSelector(
  updateArticleFeatureSelector,
  (state: UpdateArticleStateInterface) => state.isLoading,
);

export const articleSelector = createSelector(
  updateArticleFeatureSelector,
  (state: UpdateArticleStateInterface) => state.article,
);
