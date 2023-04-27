import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetFeedResponseInterface} from '@sharedModules/feed/types/getFeedResponse.interface';
import {environment} from 'src/environments/environment.development';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string, params: any = {}): Observable<GetFeedResponseInterface> {
    const fullUrl = `${environment.apiUrl}${url}`;

    return this.http.get<GetFeedResponseInterface>(fullUrl, {params});
  }
}
