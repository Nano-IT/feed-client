import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@/app/edit-article/store/actionTypes';
import {ArticleInputInterface} from '@/app/shared/types/articleInput.interface';
import {ArticleInterface} from '@/app/shared/types/article.interface';
import {BackendErrorsInterface} from 'angular-modules';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{
    slug: string;
    articleInput: ArticleInputInterface;
  }>(),
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{
    article: ArticleInterface;
  }>(),
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{
    errors: BackendErrorsInterface;
  }>(),
);
