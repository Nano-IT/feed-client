import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalFeedComponent} from './components/global-feed/global-feed.component';
import {RouterModule, Routes} from '@angular/router';
import {FeedModule} from '@sharedModules/feed/feed.module';
import {BannerComponent} from '../shared/components/banner/banner.component';
import {PopularTagsModule} from '@sharedModules/popular-tags/popular-tags.module';
import {FeedTogglerComponent} from '@/app/shared/components/feed-toggler/feed-toggler.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerComponent,
    PopularTagsModule,
    FeedTogglerComponent,
  ],
})
export class GlobalFeedModule {}
