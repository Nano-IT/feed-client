import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ArticleCommentsComponent} from './components/article-comments/article-comments.component';
import {EffectsModule} from '@ngrx/effects';
import {GetArticleCommentsEffect} from '@sharedModules/article-comments/store/effects/getArticleComments.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@sharedModules/article-comments/store/reducers';
import {RouterLink} from '@angular/router';
import {LoadingComponent} from 'angular-modules';
import {DeleteArticleCommentEffect} from '@sharedModules//article-comments/store/effects/deleteArticleComment.effect';

@NgModule({
  declarations: [ArticleCommentsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      GetArticleCommentsEffect,
      DeleteArticleCommentEffect,
    ]),
    StoreModule.forFeature('articleComments', reducers),
    NgOptimizedImage,
    RouterLink,
    LoadingComponent,
  ],
  exports: [ArticleCommentsComponent],
})
export class ArticleCommentsModule {}
