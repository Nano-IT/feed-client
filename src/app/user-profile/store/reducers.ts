import {UserProfileStateInterface} from '@/app/user-profile/types/userProfileState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from '@/app/user-profile/store/actions/getUserProfile.action';

const initialState: UserProfileStateInterface = {
  error: null,
  isLoading: false,
  data: null,
};

const userProfileReducer = createReducer(
  initialState,
  on(getUserProfileAction, (userProfileState) => ({
    ...userProfileState,
    isLoading: true,
  })),
  on(getUserProfileSuccessAction, (userProfileState, action) => ({
    ...userProfileState,
    isLoading: false,
    data: action.userProfile,
  })),
  on(getUserProfileFailureAction, (userProfileState) => ({
    ...userProfileState,
    isLoading: false,
  })),
);

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action);
}
