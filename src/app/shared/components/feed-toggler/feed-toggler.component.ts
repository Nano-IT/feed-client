import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedInSelector} from '@/app/auth/store/selectors';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'ac-feed-toggler',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.css'],
})
export class FeedTogglerComponent implements OnInit {
  @Input() tagName: string | null;

  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

  isActive(route: string): string {
    const [path] = this.router.url.split('?');

    if (path === route) {
      return 'text-green-500 border-b-2 border-b-green-500';
    }
    // if (this.router.url)
    return '';
  }
}
