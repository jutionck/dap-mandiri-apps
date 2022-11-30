import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(@SkipSelf() private readonly http: HttpClient) { }
  private baseUrl: string = '/api/v1/todos';

  // headers: Authorization: Bearer token
  getAll(): Observable<ApiResponse<Todo[]>> {
    try {
      return this.http.get<ApiResponse<Todo[]>>(this.baseUrl);
    } catch (error: any) {
      return error.message;
    }
  }

  save(todo: Todo): Observable<ApiResponse<Todo>> {
    try {
      if (todo.id) {
        return this.http.put<ApiResponse<Todo>>(this.baseUrl, todo);
      }
      return this.http.post<ApiResponse<Todo>>(this.baseUrl, todo);
    } catch (error: any) {
      return error.message;
    }
  }

  get(id: string): Observable<ApiResponse<Todo>> {
    try {
      return this.http.get<ApiResponse<Todo>>(`${this.baseUrl}/${id}`);
    } catch (error: any) {
      return error.message;
    }
  }

  remove(id: string): Observable<ApiResponse<string>> {
    try {
      return this.http.delete<ApiResponse<string>>(`${this.baseUrl}/${id}`);
    } catch (error: any) {
      return error.message;
    }
  }

  toggle(todo: Todo): Observable<void> {
    try {
      todo.isCompleted = !todo.isCompleted;
      const { id, name, isCompleted } = todo;
      return this.http.put<void>(
        this.baseUrl,
        { id, name, isCompleted },
      );
    } catch (error: any) {
      return error.message;
    }
  }
}
