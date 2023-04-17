import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CreateArticleCommentStateInterface} from '@/app/shared/modules/create-article-comment/types/createArticleCommentState.interface';

export const createArticleCommentFeatureSelector =
  createFeatureSelector<CreateArticleCommentStateInterface>(
    'createArticleComment',
  );

export const isLoadingSelector = createSelector(
  createArticleCommentFeatureSelector,
  (state: CreateArticleCommentStateInterface) => state.isSubmitting,
);

export const errorSelector = createSelector(
  createArticleCommentFeatureSelector,
  (state: CreateArticleCommentStateInterface) => state.validationErrors,
);
