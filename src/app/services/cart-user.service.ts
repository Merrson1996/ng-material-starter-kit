import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartUserModel } from '../models/cart-user.model';

@Injectable()
export class CartUserService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<CartUserModel> {
    return this._httpClient.get<CartUserModel>('https://fakestoreapi.com/carts/'+id);
  }
}
