import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';
import {select, Store} from '@ngrx/store';
import {
  errorSelector,
  isLoadingSelector,
} from '@/app/shared/modules/create-article-comment/store/selectors';
import {createArticleCommentAction} from '@/app/shared/modules/create-article-comment/store/actions/createArticleComment.action';

@Component({
  selector: 'ac-article-create-comment',
  templateUrl: './create-article-comment.component.html',
})
export class CreateArticleCommentComponent implements OnInit {
  @Input() articleSlug: string;

  form: FormGroup;
  validationErrors$: Observable<BackendErrorsInterface | null>;
  isSubmitting$: Observable<boolean>;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeValues();
    this.initializeForm();
  }

  onSubmit(): void {
    const comment = this.form.value;
    this.store.dispatch(
      createArticleCommentAction({comment, slug: this.articleSlug}),
    );
    this.form.reset()
  }

  initializeValues(): void {
    this.validationErrors$ = this.store.pipe(select(errorSelector));
    this.isSubmitting$ = this.store.pipe(select(isLoadingSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      body: '',
    });
  }
}
