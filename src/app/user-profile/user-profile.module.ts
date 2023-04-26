import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {UserProfileComponent} from '@/app/user-profile/components/user-profile/user-profile.component';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileService} from '@/app/user-profile/services/user-profile.service';
import {EffectsModule} from '@ngrx/effects';
import {GetUserProfileEffect} from '@/app/user-profile/store/effects/getUserProfile.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@/app/user-profile/store/reducers';
import {FeedModule} from "@/app/shared/modules/feed/feed.module";
import {FeedTogglerComponent} from "@/app/shared/components/feed-toggler/feed-toggler.component";
import {LoadingComponent} from "@/app/shared/components/loading/loading.component";
import {FollowModule} from "@/app/shared/modules/follow/follow.module";

const routes: Routes = [
  {
    path: ':slug',
    component: UserProfileComponent,
  },
  {
    path: ':slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    NgOptimizedImage,
    FeedModule,
    FeedTogglerComponent,
    LoadingComponent,
    FollowModule,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
