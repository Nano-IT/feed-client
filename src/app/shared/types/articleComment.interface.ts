import {ProfileInterface} from '@/app/shared/types/profile.interface';

export interface ArticleCommentInterface {
  author: ProfileInterface;
  body: string;
  createdAt: string;
  updatedAt: string;
  id: number;
}
