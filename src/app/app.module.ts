import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ListProductComponent } from './product/list-product/list-product.component';
import { CategoryComponent } from './category/category.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AddSuppliersComponent } from './suppliers/add-suppliers/add-suppliers.component';
import { MatDialogModule } from "@angular/material/dialog";
import { ProductSuppliersComponent } from './product/product-suppliers/product-suppliers.component';
import { DocumentationComponent } from './homepage/documentation/documentation.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomepageComponent,
    ListProductComponent,
    CategoryComponent,
    SuppliersComponent,
    AddCategoryComponent,
    AddSuppliersComponent,
    ProductSuppliersComponent,
    DocumentationComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
