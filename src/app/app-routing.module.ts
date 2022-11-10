import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidayListComponentModule } from './components/holiday-list/holiday-list.component-module';
import { HolidayServiceModule } from './services/holiday.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoriesListComponent },
    { path: 'crypto', component: CryptoListComponent },
    { path: 'public-holiday', component: HolidayListComponent }]), ProductListComponentModule, ProductServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptoServiceModule, HolidayListComponentModule, HolidayServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
