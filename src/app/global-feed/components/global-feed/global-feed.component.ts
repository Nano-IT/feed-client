import { Component } from '@angular/core';

@Component({
  selector: 'ac-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css'],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
