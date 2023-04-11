import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isLoggedInSelector } from '@/app/auth/store/selectors';
import {RouterLink, RouterLinkActive} from "@angular/router";

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

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
