import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ArticleCommentsComponent} from './components/article-comments/article-comments.component';
import {EffectsModule} from '@ngrx/effects';
import {GetArticleCommentsEffect} from '@/app/shared/modules/article-comments/store/effects/getArticleComments.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@/app/shared/modules/article-comments/store/reducers';
import {RouterLink} from '@angular/router';
import {LoadingComponent} from '@/app/shared/components/loading/loading.component';
import {DeleteArticleCommentEffect} from '@/app/shared/modules/article-comments/store/effects/deleteArticleComment.effect';

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
