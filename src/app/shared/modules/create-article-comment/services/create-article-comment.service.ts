import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';
import {environment} from '@/environments/environment.development';
import {CreateArticleCommentResponseInterface} from '@/app/shared/modules/create-article-comment/types/createArticleCommentResponse.interface';
import {
  CreateArticleCommentInputInterface
} from "@/app/shared/modules/create-article-comment/types/createArticleCommentInput.interface";

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

    return this.http
      .post(url, {comment})
      .pipe(
        map(
          (response: CreateArticleCommentResponseInterface) => response.comment,
        ),
      );
  }
}
