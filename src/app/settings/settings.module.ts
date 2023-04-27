import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './components/settings/settings.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@/app/settings/store/reducers';
import {BackendErrorMessagesComponent} from 'angular-modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingComponent} from 'angular-modules';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];
@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    BackendErrorMessagesComponent,
    FormsModule,
    LoadingComponent,
    ReactiveFormsModule,
  ],
})
export class SettingsModule {}
