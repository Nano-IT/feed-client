import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleInputInterface} from '@/app/shared/types/articleInput.interface';
import {Observable} from 'rxjs';
import {environment} from '@/environments/environment.development';
import {ArticleInterface} from '@/app/shared/types/article.interface';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  editArticle(
    slug: string,
    article: ArticleInputInterface,
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.put<ArticleInterface>(fullUrl, article);
  }
}
