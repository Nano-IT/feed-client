import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment.development';
import {LoginRequestInterface} from '../types/loginRequest.interface';
import {CurrentUserInputInterface} from '@/app/shared/types/currentUserInput.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/register`;

    return this.http.post<CurrentUserInterface>(url, data);
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/login`;

    return this.http.post<CurrentUserInterface>(url, data);
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/profiles/me`;

    return this.http.get<CurrentUserInterface>(url);
  }
  updateCurrentUser(
    user: CurrentUserInputInterface,
  ): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/profiles/me`;

    return this.http.put<CurrentUserInterface>(url, user);
  }
}
