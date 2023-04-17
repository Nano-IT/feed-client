import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@/app/shared/modules/create-article-comment/store/actionTypes';
import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';
import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';

export const createArticleCommentAction = createAction(
  ActionTypes.CREATE_ARTICLE_COMMENT,
  props<{comment: ArticleCommentInterface, slug: string}>(),
);

export const createArticleCommentSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_COMMENT_SUCCESS,
  props<{comment: ArticleCommentInterface}>(),
);

export const createArticleCommentFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_COMMENT_FAILURE,
  props<{errors: BackendErrorsInterface}>(),
);
