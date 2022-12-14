import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartUserModel } from '../models/cart-user.model';

@Injectable()
export class DeleteCartService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CartUserModel[]> {
    return this._httpClient.get<CartUserModel[]>('https://fakestoreapi.com/carts');
  }

  delete(id: string): Observable<CartUserModel> {
    return this._httpClient.delete<CartUserModel>('https://fakestoreapi.com/carts/'+id);
  }
}
