import {BackendErrorsInterface} from 'angular-modules';
import {ArticleInterface} from '@/app/shared/types/article.interface';

export interface UpdateArticleStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
  article: ArticleInterface | null;
}
