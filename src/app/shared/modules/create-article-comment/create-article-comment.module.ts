import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateArticleCommentComponent} from '@/app/shared/modules/create-article-comment/components/create-article-comment/create-article-comment.component';
import {EffectsModule} from '@ngrx/effects';
import {CreateArticleCommentEffect} from '@/app/shared/modules/create-article-comment/store/effects/createArticleComment.effect';
import {CreateArticleCommentService} from '@/app/shared/modules/create-article-comment/services/create-article-comment.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@/app/shared/modules/create-article-comment/store/reducers';
import {
  BackendErrorMessagesComponent
} from "@/app/shared/components/backend-error-messages/backend-error-messages.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [CreateArticleCommentComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CreateArticleCommentEffect]),
    StoreModule.forFeature('createArticleComment', reducers),
    BackendErrorMessagesComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CreateArticleCommentService],
  exports: [CreateArticleCommentComponent],
})
export class CreateArticleCommentModule {}
