import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FeedComponent} from './components/feed/feed.component';
import {FeedService} from './services/feed.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from './store/effects/getFeed.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {RouterLink} from '@angular/router';
import {ErrorMessageComponent} from '../../components/error-message/error-message.component';
import {LoadingComponent} from '../../components/loading/loading.component';
import {PaginationComponent} from '../../components/pagination/pagination.component';
import {TagListComponent} from '@/app/shared/components/tag-list/tag-list.component';
import {AddToFavoriteModule} from '@/app/shared/modules/add-to-favorite/add-to-favorite.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterLink,
    NgOptimizedImage,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TagListComponent,
    AddToFavoriteModule,
  ],
  providers: [FeedService],
  exports: [FeedComponent],
})
export class FeedModule {}
