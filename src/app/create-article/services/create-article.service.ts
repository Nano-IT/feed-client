import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleInputInterface} from '@/app/shared/types/articleInput.interface';
import {Observable} from 'rxjs';
import {ArticleInterface} from '@/app/shared/types/article.interface';
import {environment} from '@/environments/environment.development';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface,
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles`;

    return this.http.post<ArticleInterface>(fullUrl, articleInput);
  }
}
