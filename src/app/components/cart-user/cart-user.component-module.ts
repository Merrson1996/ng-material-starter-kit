import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartUserComponent } from './cart-user.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [CartUserComponent],
  providers: [],
  exports: [CartUserComponent]
})
export class CartUserComponentModule {
}
