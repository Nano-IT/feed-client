import {BackendErrorsInterface} from 'angular-modules';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
  errorMessage: string | null;
}
