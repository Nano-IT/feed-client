import {Injectable} from '@angular/core';
import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ArticleCommentsService {
  constructor(private http: HttpClient) {}

  getArticleComments(slug: string): Observable<ArticleCommentInterface[]> {
    const url = `${environment.apiUrl}/articles/${slug}/comments`;

    return this.http.get<ArticleCommentInterface[]>(url);
  }

  deleteArticleComments(slug: string, commentId: number): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}/comments/${commentId}`;

    return this.http.delete(url);
  }
}
