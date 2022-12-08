import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FiltredListProductCategoryComponent } from './filtred-list-product-category.component';
import {FlexModule} from "@angular/flex-layout";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule, RouterLink],
  declarations: [FiltredListProductCategoryComponent],
  providers: [],
  exports: [FiltredListProductCategoryComponent]
})
export class FiltredListProductCategoryComponentModule {
}
