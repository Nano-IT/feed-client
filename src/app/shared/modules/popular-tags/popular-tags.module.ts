import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from '@/app/shared/modules/popular-tags/store/effects/getPopularTags.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@/app/shared/modules/popular-tags/store/reducers';
import {TagListComponent} from "@/app/shared/components/tag-list/tag-list.component";
import {LoadingComponent} from "@/app/shared/components/loading/loading.component";
import {ErrorMessageComponent} from "@/app/shared/components/error-message/error-message.component";

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
    TagListComponent,
    LoadingComponent,
    ErrorMessageComponent,
  ],
  exports: [
    PopularTagsComponent
  ]
})
export class PopularTagsModule {}
