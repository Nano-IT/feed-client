import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ac-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [UtilsService]
})
export class PaginationComponent {
  @Input() total = 0;
  @Input() limit = 0;
  @Input() url = '';
  @Input() currentPage = 1;

  constructor(private utilsService: UtilsService) {}

  get pagesCount(): number {
    return Math.ceil(this.total / this.limit);
  }

  get pages(): number[] {
    return this.utilsService.range(1, this.pagesCount);
  }

  getPageClass(page: number): Record<string, boolean> {
    return {
      'bg-green-500 text-white': page === this.currentPage,
      'cursor-pointer hover:bg-gray-100': page !== this.currentPage
    }
  }
}
