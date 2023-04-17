import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@/app/shared/modules/article-comments/store/actionTypes';

export const deleteArticleCommentsAction = createAction(
  ActionTypes.DELETE_ARTICLE_COMMENT,
  props<{slug: string; commentId: number}>(),
);

export const deleteArticleCommentsSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_COMMENTS_SUCCESS,
  props<{commentId: number}>(),
);

export const deleteArticleCommentsFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_COMMENTS_FAILURE,
);
