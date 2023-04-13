import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleInputInterface } from '@/app/shared/types/articleInput.interface';
import { map, Observable } from 'rxjs';
import { SaveArticleResponseInterface } from '@/app/shared/types/saveArticleResponse.interface';
import { environment } from '@/environments/environment.development';
import { ArticleInterface } from '@/app/shared/types/article.interface';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  editArticle(
    slug: string,
    article: ArticleInputInterface,
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, { article })
      .pipe(map((response: SaveArticleResponseInterface) => response.article));
  }
}
