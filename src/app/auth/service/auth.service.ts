import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { Login, LoginResponse } from '../model/login.model';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  baseUrl: string = '/api/v1/auth/login';

  login(payload: Login): Observable<ApiResponse<LoginResponse>> {
    try {
      return this.http.post<ApiResponse<LoginResponse>>(this.baseUrl, payload);
    } catch (err: any) {
      return err.message;
    }
  }
}
