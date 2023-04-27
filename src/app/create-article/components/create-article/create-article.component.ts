import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from '@/app/shared/types/articleInput.interface';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from 'angular-modules';
import {select, Store} from '@ngrx/store';
import {
  errorMessageSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '@/app/create-article/store/selectors';
import {createArticleAction} from '@/app/create-article/store/actions/createArticle.action';

@Component({
  selector: 'ac-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    tagList: [],
    title: '',
    body: '',
    description: '',
  };

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  errorsMessage$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.errorsMessage$ = this.store.pipe(select(errorMessageSelector));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}));
  }
}
