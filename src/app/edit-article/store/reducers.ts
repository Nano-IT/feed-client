import {Action, createReducer, on} from '@ngrx/store';
import {routerNavigationAction} from '@ngrx/router-store';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '@/app/edit-article/store/actions/updateArticle.action';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '@/app/edit-article/store/actions/getArticle.action';
import {UpdateArticleStateInterface} from '@/app/edit-article/types/updateArticleState.interface';

const initialState: UpdateArticleStateInterface = {
  validationErrors: null,
  isSubmitting: false,
  article: null,
  isLoading: false,
};

const updateArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): UpdateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    updateArticleSuccessAction,
    (state): UpdateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
  on(
    updateArticleFailureAction,
    (state, action): UpdateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    getArticleAction,
    (state): UpdateArticleStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getArticleSuccessAction,
    (state, action): UpdateArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    }),
  ),
  on(
    getArticleFailureAction,
    (state): UpdateArticleStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
  on(routerNavigationAction, (): UpdateArticleStateInterface => initialState),
);

export function reducers(state: UpdateArticleStateInterface, action: Action) {
  return updateArticleReducer(state, action);
}
