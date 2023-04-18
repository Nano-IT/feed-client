import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleInterface} from '@/app/shared/types/article.interface';
import {environment} from '@/environments/environment.development';

@Injectable()
export class AddToFavoriteService {
  constructor(private http: HttpClient) {}

  addToFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);

    return this.http.post<ArticleInterface>(url, {});
  }

  removeFromFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);

    return this.http.delete<ArticleInterface>(url);
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }
}
