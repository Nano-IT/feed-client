import {ArticleCommentsStateInterface} from '@sharedModules/article-comments/types/articleCommentsState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  getArticleCommentsAction,
  getArticleCommentsFailureAction,
  getArticleCommentsSuccessAction,
} from '@sharedModules/article-comments/store/actions/getArticlleComments.action';
import {createArticleCommentSuccessAction} from '@sharedModules/create-article-comment/store/actions/createArticleComment.action';
import {deleteArticleCommentsSuccessAction} from '@sharedModules/article-comments/store/actions/deleteArticleComment.action';

const initialState: ArticleCommentsStateInterface = {
  isLoading: false,
  data: null,
  error: null,
};

const articleCommentsReducer = createReducer(
  initialState,
  on(
    getArticleCommentsAction,
    (state): ArticleCommentsStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getArticleCommentsSuccessAction,
    (state, action): ArticleCommentsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.comments,
    }),
  ),
  on(
    getArticleCommentsFailureAction,
    (state): ArticleCommentsStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
  on(createArticleCommentSuccessAction, (state, action) => ({
    ...state,
    data: [action.comment, ...state.data],
  })),
  on(deleteArticleCommentsSuccessAction, (state, action) => {
    return {
      ...state,
      data: state.data.filter((item) => item.id !== action.commentId),
    };
  }),
);

export function reducers(state: ArticleCommentsStateInterface, action: Action) {
  return articleCommentsReducer(state, action);
}
