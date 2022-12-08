import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SortedProductPriceComponent } from './sorted-product-price.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [SortedProductPriceComponent],
  providers: [],
  exports: [SortedProductPriceComponent]
})
export class SortedProductPriceComponentModule {
}
