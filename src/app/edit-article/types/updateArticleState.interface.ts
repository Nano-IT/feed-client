import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';
import {ArticleInterface} from '@/app/shared/types/article.interface';

export interface UpdateArticleStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
  article: ArticleInterface | null;
}
