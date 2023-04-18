import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {PopularTagType} from '@/app/shared/types/popularTag.type';
import {environment} from '@/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<PopularTagType[]> {
    const url = `${environment.apiUrl}/tags`;

    return this.http.get<PopularTagType[]>(url);
  }
}
