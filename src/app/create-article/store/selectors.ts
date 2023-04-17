import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CreateArticleStateInterface} from '@/app/create-article/types/createArticleState.interface';

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (state: CreateArticleStateInterface) => state.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (state: CreateArticleStateInterface) => state.validationErrors,
);
