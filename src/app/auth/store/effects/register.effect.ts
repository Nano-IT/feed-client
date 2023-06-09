import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import {catchError, of, switchMap, map, tap} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from 'angular-modules';
import {Router} from '@angular/router';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return registerSuccessAction({currentUser});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({
                errors: errorResponse.error.errors,
                errorMessage: errorResponse.error.message,
              }),
            );
          }),
        );
      }),
    ),
  );

  redirectAfterSubmitAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        }),
      ),
    {dispatch: false},
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router,
  ) {}
}
