import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxListComponent } from './checkbox-list.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CheckboxListComponent],
  providers: [],
  exports: [CheckboxListComponent]
})
export class CheckboxListComponentModule {
}
