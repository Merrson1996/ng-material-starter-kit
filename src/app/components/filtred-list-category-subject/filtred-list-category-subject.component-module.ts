import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FiltredListCategorySubjectComponent } from './filtred-list-category-subject.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [FiltredListCategorySubjectComponent],
  providers: [],
  exports: [FiltredListCategorySubjectComponent]
})
export class FiltredListCategorySubjectComponentModule {
}
