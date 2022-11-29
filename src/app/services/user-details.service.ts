import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';

@Injectable()
export class UserDetailsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<RegisterModel> {
    return this._httpClient.get<RegisterModel>('https://fakestoreapi.com/users/'+id );
  }
}
