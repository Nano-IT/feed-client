import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {ArticleInterface} from '@/app/shared/types/article.interface';
import {environment} from '@/environments/environment.development';
import {GetArticleResponseInterface} from '@/app/article/types/getArticleResponse.interface';

@Injectable()
export class AddToFavoriteService {
  constructor(private http: HttpClient) {}

  addToFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);

    return this.http.post(url, {}).pipe(map(this.getArticle));
  }

  removeFromFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);

    return this.http.delete(url).pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article;
  }
}
