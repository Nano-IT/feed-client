import { ArticleInterface } from '@/app/shared/types/article.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: string | null;
  data: ArticleInterface | null;
}
