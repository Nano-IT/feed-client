import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProfileInterface} from '@/app/shared/types/profile.interface';
import {environment} from '@/environments/environment.development';

@Injectable()
export class FollowService {
  constructor(private http: HttpClient) {}

  followUser(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}/follow`;
    return this.http.post<ProfileInterface>(url, {});
  }

  unfollowUser(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}/follow`;
    return this.http.delete<ProfileInterface>(url);
  }
}
