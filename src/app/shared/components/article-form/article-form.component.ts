import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleInputInterface} from '@/app/shared/types/articleInput.interface';
import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BackendErrorMessagesComponent} from '@/app/shared/components/backend-error-messages/backend-error-messages.component';
import {LoadingComponent} from '@/app/shared/components/loading/loading.component';

@Component({
  selector: 'ac-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    BackendErrorMessagesComponent,
    LoadingComponent,
    ReactiveFormsModule,
  ],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleInputInterface;
  @Input() isSubmitting: boolean;
  @Input() errors: BackendErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initialForm();
  }

  initialForm(): void {
    this.form = this.fb.group({
      description: this.initialValues.description,
      body: this.initialValues.body,
      title: this.initialValues.title,
      tagList: this.initialValues.tagList.join(' '),
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
