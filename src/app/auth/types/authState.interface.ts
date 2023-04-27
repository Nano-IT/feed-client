import {CurrentUserInterface} from '@/app/shared/types/currentUser.interface';
import {BackendErrorsInterface} from 'angular-modules';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
  errorMessage: string | null;
}
