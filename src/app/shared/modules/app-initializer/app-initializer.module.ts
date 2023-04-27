import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {initializeAppFactory} from '@sharedModules/app-initializer/app.initializer';
import {Store} from '@ngrx/store';
import {PersistenceService} from 'angular-modules';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [Store, PersistenceService],
      multi: true,
    },
  ],
})
export class AppInitializerModule {}
