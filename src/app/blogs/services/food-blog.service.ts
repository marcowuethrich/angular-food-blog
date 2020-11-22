import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blog} from '../model/blog';
import {environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodBlogService {

  private API_PATH = 'food-blogs';
  private BASE_URL = `${env.api_base_url}/${this.API_PATH}`;

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.BASE_URL}`);
  }

  fetchById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.BASE_URL}/${id}`);
  }

  create(blog: Blog): Observable<any> {
    return this.http.post(`${this.BASE_URL}`, blog);
  }

  update(blog: Blog): Observable<any> {
    const id = blog.id;
    blog.id = undefined;
    return this.http.put(`${this.BASE_URL}/${id}`, blog);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
