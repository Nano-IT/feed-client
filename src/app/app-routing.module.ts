import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@/app/global-feed/global-feed.module').then((m) => m.GlobalFeedModule),
  },
  {
    path: 'articles/new',
    loadChildren: () =>
      import('@/app/create-article/create-article.module').then((m) => m.CreateArticleModule),
  },
  {
    path: 'articles/:slug',
    loadChildren: () =>
      import('@/app/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'articles/:slug/edit',
    loadChildren: () =>
      import('@/app/edit-article/edit-article.module').then((m) => m.EditArticleModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('@/app/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('@/app/tag-feed/tag-feed.module').then((m) => m.TagFeedModule),
  },
  {
    path: 'profiles',
    loadChildren: () =>
      import('@/app/user-profile/user-profile.module').then((m) => m.UserProfileModule),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('@/app/your-feed/your-feed.module').then((m) => m.YourFeedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
