import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { Category } from "../models/category";
import { Suppliers } from "../models/suppliers";
import { Search } from "../models/search";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  addNewProduct(product : Product) {
    return this.httpClient.post<any>("/api/product/add", product)
  }

  getAllProduct() {
    return this.httpClient.get<any>("/api/product/list")
  }

  getAllProductDesc() {
    return this.httpClient.get<any>("/api/product/listdesc");
  }

  getAllProductPerPage() {
    return this.httpClient.get<any>("/api/product/list/0/10");
  }

  deleteOne(product: Product) {
    return this.httpClient.delete<any>("/api/product/delete/" + product.id)
  }

  addNewCategory(category: Category) {
    return this.httpClient.post<any>("/api/category/add", category)
  }

  getAllCategory() {
    return this.httpClient.get<any>("/api/category/list")
  }

  deleteCategory(category: Category) {
    return this.httpClient.delete<any>("/api/category/delete/" + category.id)
  }

  addNewSupplier(supplier: Suppliers) {
    return this.httpClient.post<any>("/api/suppliers/add", supplier)
  }

  getAllSuppliers() {
    return this.httpClient.get<any>("/api/suppliers/list")
  }

  setSupplier(supplier: Suppliers, product: Product) {
    return this.httpClient.post<any>("/api/product/supplier/" + product.id, supplier)
  }

  deleteSupplier(supplier: Suppliers) {
    return this.httpClient.delete<any>("/api/suppliers/delete/" + supplier.id)
  }

  searchProductByName(search: Search) {
    return this.httpClient.post<any>("/api/product/search", search);
  }

  getSupplierByProductId(product: Product) {
    return this.httpClient.get<any>("/api/suppliers/list/" + product.id);
  }

  searchSupplier(search: Search) {
    return this.httpClient.post<any>("/api/suppliers/search", search);
  }
}
