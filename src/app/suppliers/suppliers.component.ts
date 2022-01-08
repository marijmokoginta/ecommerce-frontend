import { Component, OnInit } from '@angular/core';
import { Suppliers } from "../models/suppliers";
import { ProductService } from "../services/product.service";
import { Router } from "@angular/router";
import { Search } from "../models/search";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  listAllSupplier: Suppliers[] = []

  search = new Search()

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllSuppliers()
  }

  addNewSupplier() {
    this.router.navigate(['add-suppliers'])
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

  editSupplier(supplier: Suppliers) {
    this.router.navigate(['add-suppliers'], {state: {data: supplier}})
  }

  deleteSupplier(supplier: Suppliers) {
    Swal.fire({
      title: 'Hapus supplier?',
      text: "data supplier akan di hapus secara permanen!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus supplier!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteSupplier(supplier).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'Data supplier berhasil dihapus.',
              'success'
            )
            this.getAllSuppliers()
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

  searchSupplier() {
    if(this.search.searchKey != undefined) {
      this.productService.searchSupplier(this.search).subscribe(
        data => {
          this.listAllSupplier = data
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

  goToProducts() {
    this.router.navigate(['product'])
  }

}
