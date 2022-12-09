import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EmployesListSortSalaryComponent } from './employes-list-sort-salary.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule,  CommonModule, MatListModule],
  declarations: [EmployesListSortSalaryComponent],
  providers: [],
  exports: [EmployesListSortSalaryComponent]
})
export class EmployesListSortSalaryComponentModule {
}
