import { Component, OnInit } from '@angular/core';
import { Suppliers } from "../../models/suppliers";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.css']
})
export class AddSuppliersComponent implements OnInit {

  supplier = new Suppliers()

  title: string = "Add New Supplier"

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    if(history.state) {
      const s = history.state
      if(s.data != undefined) {
        this.supplier = s.data
        this.title = "Edit Supplier"
      }
    }
  }

  save() {
    if(this.supplier.name == undefined) {
      alert("Supplier name is required")
    } else if(this.supplier.alamat == undefined) {
      alert("Addres is required")
    } else if(this.supplier.email == undefined) {
      alert("Email is required")
    } else {
      this.productService.addNewSupplier(this.supplier).subscribe(
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
              this.router.navigate(['suppliers'])
            }
          })
        }, error=> {
          console.log(error)
           Swal.fire({
            title: 'Gagal!',
            text: error.message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['suppliers'])
            }
          })
        }
      )
    }
  }

  goBack() {
    this.router.navigate(['suppliers'])
  }

}
