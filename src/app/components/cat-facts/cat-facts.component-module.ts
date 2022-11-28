import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { CatFactsComponent } from './cat-facts.component';

@NgModule({
  imports: [
    MatListModule,
    CommonModule
  ],
  declarations: [CatFactsComponent],
  providers: [],
  exports: [CatFactsComponent]
})
export class CatFactsComponentModule {
}
