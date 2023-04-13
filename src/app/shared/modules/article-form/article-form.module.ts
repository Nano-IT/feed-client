import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import {
  BackendErrorMessagesComponent
} from "@/app/shared/components/backend-error-messages/backend-error-messages.component";
import {LoadingComponent} from "@/app/shared/components/loading/loading.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        ArticleFormComponent
    ],
    exports: [
        ArticleFormComponent
    ],
  imports: [
    CommonModule,
    BackendErrorMessagesComponent,
    LoadingComponent,
    ReactiveFormsModule
  ]
})
export class ArticleFormModule { }
