import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductfModel } from '../models/productf.model';

@Injectable()
export class ProductformService {
  constructor(private _httpClient: HttpClient) {
  }

  create(productf: Omit <ProductfModel,'id'>): Observable<ProductfModel> {
    return this._httpClient.post<ProductfModel>('https://fakestoreapi.com/products', productf);
  }
}
