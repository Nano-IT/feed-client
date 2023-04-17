import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';

export interface CreateArticleCommentStateInterface {
  validationErrors: BackendErrorsInterface | null;
  isSubmitting: boolean;
}
