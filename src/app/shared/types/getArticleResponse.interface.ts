import {ProfileInterface} from './profile.interface';

export interface GetArticleResponseInterface {
  author: ProfileInterface;
  body: string;
  createdAt: string | Date;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string;
  title: string;
  updatedAt: string | Date;
}
