import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '@/app/shared/modules/popular-tags/types/popularTagsState.interface';
import { ArticleStateInterface } from '@/app/article/types/articleState.interface';
import { CreateArticleStateInterface } from '@/app/create-article/types/createArticleState.interface';
import { UpdateArticleStateInterface } from '@/app/edit-article/types/updateArticleState.interface';
import { SettingsStateInterface } from '@/app/settings/types/settingsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  updateArticle: UpdateArticleStateInterface;
  settings: SettingsStateInterface;
}
