import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FollowComponent} from './components/follow/follow.component';
import {EffectsModule} from '@ngrx/effects';
import {FollowUserEffect} from '@/app/shared/modules/follow/store/effects/followUser.effect';
import {FollowService} from '@/app/shared/modules/follow/services/follow.service';

@NgModule({
  declarations: [FollowComponent],
  imports: [CommonModule, EffectsModule.forFeature([FollowUserEffect])],
  exports: [FollowComponent],
  providers: [FollowService],
})
export class FollowModule {}
