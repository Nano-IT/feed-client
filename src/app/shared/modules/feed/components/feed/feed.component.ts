import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { Observable, Subscription } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { environment } from 'src/environments/environment.development';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ac-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input() apiUrl: string;
  @Input() tagName: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface>;

  limit = environment.limit;
  currentPage = 1;
  baseUrl: string = '';
  queryParamsSubscription: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    const isApiUrlChanged =
      !changes['apiUrl'].firstChange &&
      changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue;

    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Record<string, any>) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchFeed();
      },
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;

    const params: any = {
      limit: this.limit,
      offset,
    };

    if (this.tagName) {
      params.tag = this.tagName;
    }

    this.store.dispatch(getFeedAction({ url: this.apiUrl, params }));
  }
}
