import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { CreateemployeeModel } from '../models/createemployee.model';

@Injectable()
export class NewemployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  Create(createemployee: CreateemployeeModel): Observable<void> {
    return this._httpClient.post<CreateemployeeModel>('https://dummy.restapiexample.com/api/v1/create', createemployee ) .pipe(map(_=>void 0));
  }
}
