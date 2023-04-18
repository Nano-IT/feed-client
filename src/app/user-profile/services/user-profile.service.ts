import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {ProfileInterface} from '@/app/shared/types/profile.interface';
import {environment} from '@/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http.get<ProfileInterface>(url);
  }
}
