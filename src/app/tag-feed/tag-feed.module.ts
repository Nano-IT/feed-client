import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagFeedComponent} from './components/tag-feed/tag-feed.component';
import {RouterModule, Routes} from '@angular/router';
import {BannerComponent} from '@/app/shared/components/banner/banner.component';
import {FeedModule} from '@sharedModules/feed/feed.module';
import {FeedTogglerComponent} from '@/app/shared/components/feed-toggler/feed-toggler.component';
import {PopularTagsModule} from '@sharedModules/popular-tags/popular-tags.module';

const routes: Routes = [
  {
    path: ':slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerComponent,
    FeedModule,
    FeedTogglerComponent,
    PopularTagsModule,
  ],
})
export class TagFeedModule {}
