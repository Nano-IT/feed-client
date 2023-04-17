import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticleStateInterface} from '../types/articleState.interface';

export const articleFeatureSelector =
  createFeatureSelector<ArticleStateInterface>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (state: ArticleStateInterface) => state.isLoading,
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (state: ArticleStateInterface) => state.data,
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (state: ArticleStateInterface) => state.error,
);
