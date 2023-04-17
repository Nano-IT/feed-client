import {Action, createReducer, on} from '@ngrx/store';
import {routerNavigationAction} from '@ngrx/router-store';
import {CreateArticleStateInterface} from '@/app/create-article/types/createArticleState.interface';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '@/app/create-article/store/actions/createArticle.action';

const initialState: CreateArticleStateInterface = {
  validationErrors: null,
  isSubmitting: false,
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(routerNavigationAction, (): CreateArticleStateInterface => initialState),
);

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
}
