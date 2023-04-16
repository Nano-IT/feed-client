import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { PersistenceService } from '../shared/services/persistence.service';
import { LoginEffect } from './store/effects/login.effect';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { BackendErrorMessagesComponent } from '@/app/shared/components/backend-error-messages/backend-error-messages.component';
import { UpdateCurrentUserEffect } from '@/app/auth/store/effects/updateCurrentUser.effect';
import { LogoutEffect } from '@/app/auth/store/effects/logout.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect,
    ]),
    BackendErrorMessagesComponent,
  ],
  exports: [LoginComponent, RegisterComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
