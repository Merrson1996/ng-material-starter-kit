import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployesModel } from '../models/employes.model';
import { ApiResponse } from './api.response';

export interface EmployeeResponse {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;

}
@Injectable()
export class EmployesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployesModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>("https://dummy.restapiexample.com/api/v1/employees").pipe(
      map((response) => {
        return response.data.map((employeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            salary: employeeResponse.employee_salary,
            id: employeeResponse.id,
            age: employeeResponse.employee_age,
            image: employeeResponse.profile_image,
          }
        })
      }

      ))
      ;
  }


}
