import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {ProductServiceModule} from "./services/product.service-module";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ProductServiceModule,
    ProductListComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
