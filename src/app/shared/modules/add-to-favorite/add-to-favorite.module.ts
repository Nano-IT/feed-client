import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoriteComponent } from './components/add-to-favorite/add-to-favorite.component';
import { AddToFavoriteService } from '@/app/shared/modules/add-to-favorite/services/add-to-favorite.service';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesEffect } from '@/app/shared/modules/add-to-favorite/store/effects/addToFavorites.effect';

@NgModule({
  declarations: [AddToFavoriteComponent],
  exports: [AddToFavoriteComponent],
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  providers: [AddToFavoriteService],
})
export class AddToFavoriteModule {}
