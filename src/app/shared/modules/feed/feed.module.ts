import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FeedComponent} from './components/feed/feed.component';
import {FeedService} from './services/feed.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from './store/effects/getFeed.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {RouterLink} from '@angular/router';
import {ErrorMessageComponent} from 'angular-modules';
import {LoadingComponent} from 'angular-modules';
import {PaginationComponent} from 'angular-modules';
import {TagListComponent} from '@/app/shared/components/tag-list/tag-list.component';
import {AddToFavoriteModule} from '@sharedModules/add-to-favorite/add-to-favorite.module';

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
