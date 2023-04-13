import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { PersistenceService } from './shared/services/persistence.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { PopularTagsModule } from '@/app/shared/modules/popular-tags/popular-tags.module';
import { YourFeedModule } from '@/app/your-feed/your-feed.module';
import { TagFeedModule } from '@/app/tag-feed/tag-feed.module';
import { ArticleModule } from '@/app/article/article.module';
import { CreateArticleModule } from '@/app/create-article/create-article.module';
import { EditArticleModule } from '@/app/edit-article/edit-article.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
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
    PopularTagsModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
