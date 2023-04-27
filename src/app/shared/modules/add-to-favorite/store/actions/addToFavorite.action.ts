import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@sharedModules/add-to-favorite/store/actionTypes';
import {ArticleInterface} from '@/app/shared/types/article.interface';

export const addToFavoriteAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{slug: string; isFavorite: boolean}>(),
);

export const addToFavoriteSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{article: ArticleInterface}>(),
);

export const addToFavoriteSuccessFailure = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE,
);
