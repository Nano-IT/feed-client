import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilsService} from 'angular-modules';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'ac-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [UtilsService],
})
export class PaginationComponent {
  @Input() total = 0;
  @Input() limit = 0;
  @Input() url = '';
  @Input() currentPage = 1;
  @Input() displayCount = 5;

  constructor(private utilsService: UtilsService) {}

  get pagesCount(): number {
    return Math.ceil(this.total / this.limit);
  }

  get totalPages(): number[] {
    return this.utilsService.range(1, this.pagesCount);
  }

  get pagesMiddleCeil(): number {
    return Math.ceil(this.displayCount / 2);
  }

  get pagesMiddleFloor(): number {
    return Math.floor(this.displayCount / 2);
  }

  get pages(): number[] {
    if (this.currentPage < this.displayCount) {
      return this.totalPages.slice(0, this.displayCount);
    }

    if (this.currentPage > this.pagesCount - this.displayCount + 1) {
      return this.totalPages.slice(
        this.pagesCount - this.displayCount,
        this.pagesCount,
      );
    }

    const start = this.currentPage - this.pagesMiddleCeil;
    const end = this.currentPage + this.pagesMiddleFloor;

    return this.totalPages.slice(start, end);
  }

  get displayFirstPage(): boolean {
    return this.currentPage > this.pagesMiddleCeil + 1;
  }

  get displayLastPage(): boolean {
    return this.currentPage < this.pagesCount - this.pagesMiddleFloor - 1;
  }

  getPageClass(page: number): Record<string, boolean> {
    return {
      'bg-green-500 text-white': page === this.currentPage,
      'cursor-pointer hover:bg-gray-100': page !== this.currentPage,
    };
  }
}
