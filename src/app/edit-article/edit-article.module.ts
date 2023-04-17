import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditArticleComponent} from './components/edit-article/edit-article.component';
import {EditArticleService} from '@/app/edit-article/services/edit-article.service';
import {ArticleService as SharedArticleService} from '@/app/shared/services/article.service';
import {EffectsModule} from '@ngrx/effects';
import {UpdateArticleEffect} from '@/app/edit-article/store/effects/updateArticle.effect';
import {GetArticleEffect} from '@/app/edit-article/store/effects/getArticle.effect';
import {LoadingComponent} from '@/app/shared/components/loading/loading.component';
import {BackendErrorMessagesComponent} from '@/app/shared/components/backend-error-messages/backend-error-messages.component';
import {ErrorMessageComponent} from '@/app/shared/components/error-message/error-message.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@/app/edit-article/store/reducers';
import {ArticleFormComponent} from '@/app/shared/components/article-form/article-form.component';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    LoadingComponent,
    BackendErrorMessagesComponent,
    ErrorMessageComponent,
    RouterModule.forChild(routes),
    StoreModule.forFeature('updateArticle', reducers),
    ArticleFormComponent,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
