import { Component, OnInit } from '@angular/core';
import { Category } from "../../models/category";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  title: string = "Add New Category"

  category = new Category()

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
     if(history.state) {
      const s = history.state
      if(s.data != undefined){
        this.category = s.data
        this.title = "Edit Category"
      }
    }
  }

  save() {
    if(this.category.name == undefined) {
      alert("Category Name must not be null")
    }  else {
      this.productService.addNewCategory(this.category).subscribe(
        data=> {
          Swal.fire({
            title: 'Berhasil',
            text: this.title,
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['category'])
            }
          })
        }, error=> {
           Swal.fire({
            title: 'Gagal!',
            text: 'Terjadi kesalahan',
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['category'])
            }
          })
        }
      )
    }
  }

  goBack() {
    this.router.navigate(['category'])
  }

}
