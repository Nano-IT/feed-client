import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@sharedModules/article-comments/store/actionTypes';
import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';

export const getArticleCommentsAction = createAction(
  ActionTypes.GET_ARTICLE_COMMENTS,
  props<{slug: string}>(),
);

export const getArticleCommentsSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_COMMENTS_SUCCESS,
  props<{comments: ArticleCommentInterface[]}>(),
);

export const getArticleCommentsFailureAction = createAction(
  ActionTypes.GET_ARTICLE_COMMENTS_FAILURE,
);

