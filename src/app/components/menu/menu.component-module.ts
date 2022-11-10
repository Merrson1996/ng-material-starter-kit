import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  declarations: [MenuComponent],
  providers: [],
  exports: [MenuComponent]
})
export class MenuComponentModule {
}
