import {Injectable} from '@angular/core';
import {GetArticleCommentsResponseInterface} from '@/app/shared/modules/article-comments/types/getArticleCommentsResponse.interface';
import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '@/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ArticleCommentsService {
  constructor(private http: HttpClient) {}

  getArticleComments(slug: string): Observable<ArticleCommentInterface[]> {
    const url = `${environment.apiUrl}/articles/${slug}/comments`;

    return this.http
      .get(url)
      .pipe(
        map(
          (response: GetArticleCommentsResponseInterface) => response.comments,
        ),
      );
  }

  deleteArticleComments(slug: string, commentId: number): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}/comments/${commentId}`;

    return this.http.delete(url);
  }
}
