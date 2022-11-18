import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NewemployeeFormComponent } from './components/newemployee-form/newemployee-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidayListComponentModule } from './components/holiday-list/holiday-list.component-module';
import { HolidayServiceModule } from './services/holiday.service-module';
import { CheckboxListComponentModule } from './components/checkbox-list/checkbox-list.component-module';
import { MenuComponentModule } from './components/menu/menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductformServiceModule } from './services/productform.service-module';
import { NewemployeeFormComponentModule } from './components/newemployee-form/newemployee-form.component-module';
import { NewemployeeServiceModule } from './services/newemployee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterServiceModule } from './services/register.service-module';
import { RegisterComponentModule } from './components/register/register.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holiday', component: HolidayListComponent }, { path: 'checkbox-categories', component: CheckboxListComponent }, { path: 'categories-menu', component: MenuComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: NewemployeeFormComponent }, { path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent }]), ProductListComponentModule, ProductServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptoServiceModule, HolidayListComponentModule, HolidayServiceModule, CheckboxListComponentModule, MenuComponentModule, ProductFormComponentModule, ProductformServiceModule, NewemployeeFormComponentModule, NewemployeeServiceModule, LoginComponentModule, LoginServiceModule, RegisterServiceModule, RegisterComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
