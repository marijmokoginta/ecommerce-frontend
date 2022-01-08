import { Component, OnInit } from '@angular/core';
import { Category } from "../models/category";
import { Router } from "@angular/router";
import { ProductService } from "../services/product.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  listAllCategory: Category[] = []

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategory()
  }

  addNewCategory(){
    this.router.navigate(['add-category'])
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(
      data => {
        this.listAllCategory = data
      }, error => {

      }
    )
  }

  editCategory(category: Category) {
    this.router.navigate(['add-category'], {state: {data: category}})
  }

  deleteCategory(category: Category) {
    Swal.fire({
      title: 'Hapus category?',
      text: "category akan di hapus secara permanen!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus category!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteCategory(category).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'Category berhasil dihapus.',
              'success'
            )
            this.getAllCategory()
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

  goToProducts() {
    this.router.navigate(['product'])
  }

}
