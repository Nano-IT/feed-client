import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagType } from '@/app/shared/types/popularTag.type';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ac-tag-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css'],
})
export class TagListComponent {
  @Input() tags: PopularTagType[] = [];
}
