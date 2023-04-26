import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from '@/app/shared/components/banner/banner.component';
import {FeedModule} from '@/app/shared/modules/feed/feed.module';
import {FeedTogglerComponent} from '@/app/shared/components/feed-toggler/feed-toggler.component';
import {PopularTagsModule} from '@/app/shared/modules/popular-tags/popular-tags.module';
import {RouterModule, Routes} from '@angular/router';
import {YourFeedComponent} from '@/app/your-feed/components/your-feed/your-feed.component';

const routes: Routes = [
  {
    path: '',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    BannerComponent,
    FeedModule,
    PopularTagsModule,
    FeedTogglerComponent,
    RouterModule.forChild(routes),
  ],
})
export class YourFeedModule {}
