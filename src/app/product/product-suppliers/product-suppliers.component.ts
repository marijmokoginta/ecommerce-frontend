import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { Suppliers } from "../../models/suppliers";
import { ProductService } from "../../services/product.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-suppliers',
  templateUrl: './product-suppliers.component.html',
  styleUrls: ['./product-suppliers.component.css']
})
export class ProductSuppliersComponent implements OnInit {

  product = new Product()
  newProduct = new Product()

  listAllSupplier: Suppliers[] = []
  listProductSupplier: Suppliers[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    if(history.state) {
      const s = history.state
      if(s.data != undefined){
        this.product = s.data
      }
    }
    this.getSomeSupplier()
    this.getAllSuppliers()
    console.log(this.listProductSupplier)
  }

  getSomeSupplier() {
    this.productService.getSupplierByProductId(this.product).subscribe(
      data => {
        this.listProductSupplier = data
      }, error => {
        console.log(error)
      }
    )
  }

  getAllSuppliers() {
    this.productService.getAllSuppliers().subscribe(
      data => {
        this.listAllSupplier = data
      }, error => {
        console.log(error);
      }
    )
  }

  addSupplier(supplier: Suppliers) {
    this.productService.setSupplier(supplier, this.product).subscribe(
      data => {
        this.listProductSupplier = data
        Swal.fire({
          title: 'Berhasil',
          text: "Supplier berhasil ditambahkan!",
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.isConfirmed) {
            this.getSomeSupplier()
          }
        })
      }, error => {
        Swal.fire(
          'Error!',
          error.name,
          'error'
        )
      }
    )
  }

}
