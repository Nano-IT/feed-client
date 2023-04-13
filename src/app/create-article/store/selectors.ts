import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CreateArticleStateInterface } from '@/app/create-article/types/createArticleState.interface';

export const createArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateArticleStateInterface
>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (state: CreateArticleStateInterface) => state.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (state: CreateArticleStateInterface) => state.validationErrors,
);
