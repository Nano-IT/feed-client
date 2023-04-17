import {CreateArticleCommentStateInterface} from '@/app/shared/modules/create-article-comment/types/createArticleCommentState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  createArticleCommentAction,
  createArticleCommentFailureAction,
  createArticleCommentSuccessAction,
} from '@/app/shared/modules/create-article-comment/store/actions/createArticleComment.action';

const initialState: CreateArticleCommentStateInterface = {
  validationErrors: null,
  isSubmitting: false,
};

const createArticleCommentReducer = createReducer(
  initialState,
  on(createArticleCommentAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleCommentSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(createArticleCommentFailureAction, (state, action) => ({
    ...state,
    validationErrors: action.errors,
    isSubmitting: false,
  })),
);

export function reducers(
  state: CreateArticleCommentStateInterface,
  action: Action,
) {
  return createArticleCommentReducer(state, action);
}
