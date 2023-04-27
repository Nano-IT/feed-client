import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateArticleCommentComponent} from '@sharedModules/create-article-comment/components/create-article-comment/create-article-comment.component';
import {EffectsModule} from '@ngrx/effects';
import {CreateArticleCommentEffect} from '@sharedModules/create-article-comment/store/effects/createArticleComment.effect';
import {CreateArticleCommentService} from '@sharedModules/create-article-comment/services/create-article-comment.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@sharedModules/create-article-comment/store/reducers';
import {
  BackendErrorMessagesComponent
} from "angular-modules";
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
