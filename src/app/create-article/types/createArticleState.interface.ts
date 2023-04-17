import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
