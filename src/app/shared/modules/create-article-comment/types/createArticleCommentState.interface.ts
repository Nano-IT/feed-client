import {BackendErrorsInterface} from 'angular-modules';

export interface CreateArticleCommentStateInterface {
  validationErrors: BackendErrorsInterface | null;
  isSubmitting: boolean;
}
