import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ArticleComponent} from '@/app/article/components/article/article.component';
import {ArticleService as SharedArticleService} from '@/app/shared/services/article.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@/app/article/store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {GetArticleEffect} from '@/app/article/store/effects/getArticle.effect';
import {RouterModule, Routes} from '@angular/router';
import {LoadingComponent} from 'angular-modules';
import {ErrorMessageComponent} from 'angular-modules';
import {TagListComponent} from '@/app/shared/components/tag-list/tag-list.component';
import {ArticleService} from '@/app/article/services/article.service';
import {DeleteArticleEffect} from '@/app/article/store/effects/deleteArticle.effect';
import {FollowModule} from "@sharedModules/follow/follow.module";
import {AddToFavoriteModule} from "@sharedModules/add-to-favorite/add-to-favorite.module";
import {CreateArticleCommentModule} from "@sharedModules/create-article-comment/create-article-comment.module";
import {ArticleCommentsModule} from "@sharedModules/article-comments/article-comments.module";
import {MarkdownModule} from "angular-modules";

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('article', reducers),
        EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
        RouterModule.forChild(routes),
        LoadingComponent,
        ErrorMessageComponent,
        TagListComponent,
        NgOptimizedImage,
        FollowModule,
        AddToFavoriteModule,
        CreateArticleCommentModule,
        ArticleCommentsModule,
        MarkdownModule,
    ],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
