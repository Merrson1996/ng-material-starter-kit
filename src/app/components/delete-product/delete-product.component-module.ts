import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DeleteProductComponent } from './delete-product.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [DeleteProductComponent],
  providers: [],
  exports: [DeleteProductComponent]
})
export class DeleteProductComponentModule {
}
