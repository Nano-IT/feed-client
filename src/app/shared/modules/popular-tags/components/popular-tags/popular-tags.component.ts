import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PopularTagType} from '@/app/shared/types/popularTag.type';
import {select, Store} from '@ngrx/store';
import {getPopularTagsAction} from '@/app/shared/modules/popular-tags/store/actions/popularTags.action';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '@/app/shared/modules/popular-tags/store/selectors';

@Component({
  selector: 'ac-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
