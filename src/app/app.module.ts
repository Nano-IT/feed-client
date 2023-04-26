import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {GlobalFeedModule} from './global-feed/global-feed.module';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {TopBarComponent} from './shared/components/top-bar/top-bar.component';
import {AppInitializerModule} from '@/app/shared/modules/app-initializer/app-initializer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({router: routerReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    GlobalFeedModule,
    StoreRouterConnectingModule.forRoot(),
    TopBarComponent,
    AppInitializerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
