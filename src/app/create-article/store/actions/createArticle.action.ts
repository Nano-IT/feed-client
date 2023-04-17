import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@/app/create-article/store/actionTypes';
import {ArticleInputInterface} from '@/app/shared/types/articleInput.interface';
import {ArticleInterface} from '@/app/shared/types/article.interface';
import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{
    articleInput: ArticleInputInterface;
  }>(),
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{
    article: ArticleInterface;
  }>(),
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{
    errors: BackendErrorsInterface;
  }>(),
);
