import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Product } from "../../models/product";
import { Search } from "../../models/search";
import { ProductService } from "../../services/product.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listAllProduct: Product[] = []

  search = new Search()


  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProduct()
  }

  addNewProduct() {
    this.router.navigate(['add-product'])
  }

  getAllProduct() {
    this.productService.getAllProductDesc().subscribe(
      data => {
        this.listAllProduct = data
      }, error => {
        console.log(error)
      }
    )
  }

  editProduct(product: Product) {
    this.router.navigate(['add-product'], {state: {data: product}})
  }

  deleteProduct(product: Product) {
    Swal.fire({
      title: 'Hapus produk?',
      text: "data produk akan di hapus secara permanen!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus produk!'
    }).then((result) => {
      if (result.isConfirmed) {
          this.productService.deleteOne(product).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'Data produk berhasil dihapus.',
              'success'
            )
            this.productService.getAllProductDesc().subscribe(
              data => {
                this.listAllProduct = data
              }, error => {
                console.log(error)
              }
            )
          }, error => {
            Swal.fire(
              'Error!',
              error.message,
              'error'
            )
          }
        )
      }
    })
  }

  productSuppliers(product: Product) {
    this.router.navigate(['product-suppliers'], {state: {data: product}})
  }

  searchProduct() {
    if(this.search.searchKey != undefined) {
      this.productService.searchProductByName(this.search).subscribe(
        data => {
          this.listAllProduct = data
        }, error => {
          Swal.fire(
            'Error!',
            error.message,
            'error'
          )
        }
      )
    }
  }

  goToCategories() {
    this.router.navigate(['category'])
  }

  goToSuppliers() {
    this.router.navigate(['suppliers'])
  }
}
