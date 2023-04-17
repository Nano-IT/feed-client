import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoriteAction } from '@/app/shared/modules/add-to-favorite/store/actions/addToFavorite.action';

@Component({
  selector: 'ac-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.css'],
})
export class AddToFavoriteComponent implements OnInit {
  @Input('isFavorite') isFavoriteProp: boolean;
  @Input() articleSlug: string;
  @Input('favoritesCount') favoritesCountProp: number;

  favoritesCount: number;
  isFavorite: boolean;

  constructor(private store: Store) {}

  get bntClass(): string {
    if (this.isFavorite) {
      return 'bg-green-500 text-white';
    }

    return 'bg-white text-green-500';
  }

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProp;
    this.isFavorite = this.isFavoriteProp;
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoriteAction({
        slug: this.articleSlug,
        isFavorite: this.isFavorite,
      }),
    );

    if (this.isFavorite) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }

    this.isFavorite = !this.isFavorite;
  }
}
