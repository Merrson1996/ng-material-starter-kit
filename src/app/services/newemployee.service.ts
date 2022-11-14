import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateemployeeModel } from '../models/createemployee.model';

@Injectable()
export class NewemployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  Create(createemployee: Omit<CreateemployeeModel,"id">): Observable<CreateemployeeModel> {
    return this._httpClient.post<CreateemployeeModel>('https://dummy.restapiexample.com/api/v1/create', createemployee );
  }
}
