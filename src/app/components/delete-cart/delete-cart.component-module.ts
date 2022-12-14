import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DeleteCartComponent } from './delete-cart.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [DeleteCartComponent],
  providers: [],
  exports: [DeleteCartComponent]
})
export class DeleteCartComponentModule {
}
