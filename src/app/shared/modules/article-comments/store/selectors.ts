import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticleCommentsStateInterface} from '@/app/shared/modules/article-comments/types/articleCommentsState.interface';

export const articleCommentFeatureSelector =
  createFeatureSelector<ArticleCommentsStateInterface>('articleComments');

export const isLoadingSelector = createSelector(
  articleCommentFeatureSelector,
  (state: ArticleCommentsStateInterface) => state.isLoading,
);

export const articleCommentsSelector = createSelector(
  articleCommentFeatureSelector,
  (state: ArticleCommentsStateInterface) => state.data,
);
