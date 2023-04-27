import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {updateCurrentUserAction} from '@/app/auth/store/actions/updateCurrentUser.action';
import {BackendErrorsInterface} from 'angular-modules';
import {filter, Observable, Subscription} from 'rxjs';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '@/app/settings/store/selectors';
import {CurrentUserInterface} from '@/app/shared/types/currentUser.interface';
import {currentUserSelector} from '@/app/auth/store/selectors';
import {CurrentUserInputInterface} from '@/app/shared/types/currentUserInput.interface';
import {logoutAction} from '@/app/auth/store/actions/sync.action';

@Component({
  selector: 'ac-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  errors$: Observable<BackendErrorsInterface | null>;
  currentUser: CurrentUserInterface | null;
  currentUserSubscription: Subscription;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  initialForm(): void {
    this.form = this.fb.group({
      email: this.currentUser?.email,
      bio: this.currentUser?.bio,
      password: '',
      username: this.currentUser?.username,
    });
  }

  initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((user) => {
        this.currentUser = user;
        this.initialForm();
      });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(updateCurrentUserAction({currentUserInput}));
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
