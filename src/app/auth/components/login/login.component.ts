import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from 'angular-modules';
import {select, Store} from '@ngrx/store';
import {
  errorMessageSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import {loginAction} from '../../store/actions/login.action';
import {LoginRequestInterface} from '../../types/loginRequest.interface';

@Component({
  selector: 'ac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  errorMessage$: Observable<string | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.errorMessage$ = this.store.pipe(select(errorMessageSelector));
  }

  submit(): void {
    const request: LoginRequestInterface = this.form.value;
    this.store.dispatch(loginAction({request}));
  }
}
