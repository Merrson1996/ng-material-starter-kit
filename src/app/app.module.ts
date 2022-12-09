import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {ProductServiceModule} from "./services/product.service-module";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {CategoriesListComponentModule} from "./components/categories-list/categories-list.component-module";
import {CategoriesServiceModule} from "./services/categories.service-module";
import {CryptoListComponentModule} from "./components/crypto-list/crypto-list.component-module";
import {CryptoServiceModule} from "./services/crypto.service-module";
import {NewemployeeServiceModule} from "./services/newemployee.service-module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ProductServiceModule,
    ProductListComponentModule,
    CategoriesListComponentModule,
    CategoriesServiceModule,
    CryptoListComponentModule,
    CryptoServiceModule,
    NewemployeeServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
