import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from '../../category/categoryModel';
import { CategoryService } from '../../category/category.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit {
  public addForm!: FormGroup;
  public categories:Category[]=[]; 
  inputForm!: FormGroup;
  constructor(private _categoryService: CategoryService) { }
  

  ngOnInit(): void {
    this._categoryService.getCategoryList().subscribe({
      next: (res) => {
        this.categories = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  
}



