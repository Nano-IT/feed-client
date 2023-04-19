import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {registerAction} from '../../store/actions/register.action';
import {Observable} from 'rxjs';
import {
  errorMessageSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';
import {BackendErrorsInterface} from '@/app/shared/types/backendErrors.interface';

@Component({
  selector: 'ac-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: '',
      password: '',
      passwordConfirmation: ''
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.errorMessage$ = this.store.pipe(select(errorMessageSelector));
  }

  submit(): void {
    const request: RegisterRequestInterface = this.form.value;
    this.store.dispatch(registerAction({request}));
  }
}
