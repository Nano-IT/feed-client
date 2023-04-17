import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ac-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.css'],
})
export class TagFeedComponent implements OnInit {
  apiUrl = '/articles';
  tagName;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.tagName = params.slug;
      this.apiUrl = `/articles?tag=${params.slug}`;
    });
  }
}
