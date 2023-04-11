import { Component } from '@angular/core';

@Component({
  selector: 'ac-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.css'],
})
export class YourFeedComponent {
  apiUrl: string = '/articles/feed';
}
