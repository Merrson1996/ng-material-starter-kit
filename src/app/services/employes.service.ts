import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployesModel } from '../models/employes.model';

@Injectable()
export class EmployesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployesModel[]> {
    return this._httpClient.get<EmployesModel[]>("https://dummy.restapiexample.com/api/v1/employees");
  }
}
