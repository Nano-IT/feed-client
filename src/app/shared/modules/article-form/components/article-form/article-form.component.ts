import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleInputInterface } from '@/app/shared/types/articleInput.interface';
import { BackendErrorsInterface } from '@/app/shared/types/backendErrors.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ac-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
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
