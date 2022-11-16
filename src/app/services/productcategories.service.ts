import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductfModel } from '../models/productf.model';

@Injectable()
export class ProductcategoriesService {
  constructor(private _httpClient: HttpClient) {
  }

  Create(productf :Omit<ProductfModel,'id'>): Observable<ProductfModel> {
    return this._httpClient.post<ProductfModel>('https://fakestoreapi.com/products', productf);
  }

  getAll(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }
}
