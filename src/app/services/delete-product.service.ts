import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetailsModel } from '../models/product-details.model';
import { ProductModel } from '../models/product.model';

@Injectable()
export class DeleteProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductDetailsModel[]> {
    return this._httpClient.get<ProductDetailsModel[]>('https://fakestoreapi.com/products');
  }

  delete(id: string): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>("https://fakestoreapi.com/products/" +id);
  }
}
