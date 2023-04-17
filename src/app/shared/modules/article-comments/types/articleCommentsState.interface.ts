import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';

export interface ArticleCommentsStateInterface {
  isLoading: boolean;
  data: ArticleCommentInterface[];
  error: string | null;
}
