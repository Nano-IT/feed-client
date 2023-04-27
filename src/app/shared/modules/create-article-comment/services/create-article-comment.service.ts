import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';
import {environment} from '@/environments/environment.development';
import {CreateArticleCommentInputInterface} from '@sharedModules/create-article-comment/types/createArticleCommentInput.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleCommentService {
  constructor(private http: HttpClient) {}

  createArticleComment(
    slug: string,
    comment: CreateArticleCommentInputInterface,
  ): Observable<ArticleCommentInterface> {
    const url = `${environment.apiUrl}/articles/${slug}/comments`;

    return this.http.post<ArticleCommentInterface>(url, comment);
  }
}
