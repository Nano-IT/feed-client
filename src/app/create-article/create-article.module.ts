import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateArticleComponent} from './components/create-article/create-article.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateArticleService} from '@/app/create-article/services/create-article.service';
import {EffectsModule} from '@ngrx/effects';
import {CreateArticleEffect} from '@/app/create-article/store/effects/createArticle.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@/app/create-article/store/reducers';
import {ArticleFormComponent} from '@/app/shared/components/article-form/article-form.component';
import {ErrorMessageComponent} from "@/app/shared/components/error-message/error-message.component";

const routes: Routes = [
  {
    path: '',
    component: CreateArticleComponent,
  },
];

@NgModule({
  declarations: [CreateArticleComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ArticleFormComponent,
        ReactiveFormsModule,
        EffectsModule.forFeature([CreateArticleEffect]),
        StoreModule.forFeature('createArticle', reducers),
        ErrorMessageComponent,
    ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
