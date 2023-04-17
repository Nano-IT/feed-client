import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {PopularTagType} from '@/app/shared/types/popularTag.type';
import {environment} from '@/environments/environment.development';
import {GetPopularTagsResponseInterface} from '@/app/shared/modules/popular-tags/types/getPopularTagsResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<PopularTagType[]> {
    const url = `${environment.apiUrl}/tags`;

    return this.http
      .get<GetPopularTagsResponseInterface>(url)
      .pipe(map((response) => response.tags));
  }
}
