import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {initializeAppFactory} from '@/app/shared/modules/app-initializer/app.initializer';
import {Store} from '@ngrx/store';
import {PersistenceService} from '@/app/shared/services/persistence.service';

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
