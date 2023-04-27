import {Action, createReducer, on} from '@ngrx/store';
import {PopularTagsStateInterface} from '@sharedModules/popular-tags/types/popularTagsState.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '@sharedModules/popular-tags/store/actions/popularTags.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false,
};

const feedReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    }),
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return feedReducer(state, action);
}
