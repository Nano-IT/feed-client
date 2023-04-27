import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CreateArticleCommentService} from '@sharedModules/create-article-comment/services/create-article-comment.service';
import {
  createArticleCommentAction,
  createArticleCommentFailureAction,
  createArticleCommentSuccessAction,
} from '@sharedModules/create-article-comment/store/actions/createArticleComment.action';
import {catchError, map, of, switchMap} from 'rxjs';
import {ArticleCommentInterface} from '@/app/shared/types/articleComment.interface';
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class CreateArticleCommentEffect {
  createComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleCommentAction),
      switchMap(({slug, comment}) => {
        return this.createCommentService
          .createArticleComment(slug, comment)
          .pipe(
            map((response: ArticleCommentInterface) => {
              return createArticleCommentSuccessAction({comment: response});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(
                createArticleCommentFailureAction({errors: error.error.errors}),
              );
            }),
          );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private createCommentService: CreateArticleCommentService,
  ) {}
}
