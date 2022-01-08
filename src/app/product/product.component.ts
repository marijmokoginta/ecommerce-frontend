import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { ProductService } from "../services/product.service";
import { Router } from "@angular/router";
import { Category } from "../models/category";
import { Suppliers } from "../models/suppliers";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string = "Add New Product"
  massage: string = ""

  listAllCategory: Category[] = []
  listAllSupplier: Suppliers[] = []

  product = new Product ()

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    if(history.state) {
      const s = history.state
      if(s.data != undefined){
        this.product = s.data
        this.title = "Edit Product"
      }
    }
    this.productService.getAllCategory().subscribe(
      data => {
        this.listAllCategory = data
      }, error => {
        console.log(error)
      }
    )
    this.productService.getAllSuppliers().subscribe(
      data => {
        this.listAllSupplier = data
      }, error => {
        console.log(error)
      }
    )
  }

  save() {    
    if(this.product.name == undefined) {
      this.massage = "Nama produk harus di isi!"
    } else if(this.product.description == undefined) {
      this.massage = "Deskripsi produk harus di isi!"
    } else if(this.product.price == undefined) {
      this.massage = "Harga produk harus di isi!"
    } else if(this.product.categoryId == undefined) {
      this.massage = "Category produk harus di isi!"
    } 
    // else if(this.product.supplierId == undefined) {
    //   this.massage = "Supplier harus di isi!"
    // } 
    else {
      this.productService.addNewProduct(this.product).subscribe(
        data => {
          Swal.fire({
            title: 'Berhasil',
            text: this.title,
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['product'])
            }
          })
        }, error => {
          Swal.fire({
            title: 'Gagal!',
            text: error.error.messages,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['product'])
            }
          })
        }
      )
    }
  }

  goBack() {
    this.router.navigate(['product'])
  }

}
