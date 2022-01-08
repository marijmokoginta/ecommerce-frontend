import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from "./product/list-product/list-product.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component";
import { AddCategoryComponent } from "./category/add-category/add-category.component";
import { SuppliersComponent } from "./suppliers/suppliers.component";
import { AddSuppliersComponent } from "./suppliers/add-suppliers/add-suppliers.component";
import { ProductSuppliersComponent } from "./product/product-suppliers/product-suppliers.component";
import { OrdersComponent } from "./orders/orders.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'add-product', component: ProductComponent},
  {path: 'product', component: ListProductComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'add-suppliers', component: AddSuppliersComponent},
  {path: 'product-suppliers', component: ProductSuppliersComponent},
  {path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
