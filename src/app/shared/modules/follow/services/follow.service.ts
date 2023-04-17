import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {ProfileInterface} from '@/app/shared/types/profile.interface';
import {environment} from '@/environments/environment.development';
import {GetUserProfileResponseInterface} from '@/app/shared/types/getUserProfileResponse.interface';

@Injectable()
export class FollowService {
  constructor(private http: HttpClient) {}

  followUser(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}/follow`;
    return this.http.post(url, {}).pipe(map(this.getUserProfile));
  }

  unfollowUser(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}/follow`;
    return this.http.delete(url).pipe(map(this.getUserProfile));
  }

  getUserProfile(response: GetUserProfileResponseInterface): ProfileInterface {
    return response.profile;
  }
}
