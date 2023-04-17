import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '@/environments/environment.development';
import {GetArticleResponseInterface} from '@/app/article/types/getArticleResponse.interface';
import {ArticleInterface} from '@/app/shared/types/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  mapArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article;
  }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .get<GetArticleResponseInterface>(fullUrl)
      .pipe(map(this.mapArticle));
  }
}
