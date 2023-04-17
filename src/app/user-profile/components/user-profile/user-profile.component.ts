import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, filter, map, Observable, Subscription} from 'rxjs';
import {ProfileInterface} from '@/app/shared/types/profile.interface';
import {select, Store} from '@ngrx/store';
import {
  userProfileSelector,
  errorsSelector,
  isLoadingSelector,
} from '@/app/user-profile/store/selectors';
import {getUserProfileAction} from '@/app/user-profile/store/actions/getUserProfile.action';
import {ActivatedRoute, Router} from '@angular/router';
import {currentUserSelector} from '@/app/auth/store/selectors';
import {CurrentUserInterface} from '@/app/shared/types/currentUser.interface';

@Component({
  selector: 'ac-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface;
  userProfileSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  slug: string;
  apiUrl: string;
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy() {
    this.userProfileSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.error$ = this.store.pipe(select(errorsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
    ]).pipe(
      map(
        ([userProfile, currentUser]: [
          ProfileInterface,
          CurrentUserInterface,
        ]) => {
          return userProfile.username === currentUser.username;
        },
      ),
    );
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: ProfileInterface) => {
        this.userProfile = userProfile;
      });

    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}));
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    if (isFavorites) {
      return `/articles?favorited=${this.slug}`;
    }

    return `/articles?author=${this.slug}`;
  }
}
