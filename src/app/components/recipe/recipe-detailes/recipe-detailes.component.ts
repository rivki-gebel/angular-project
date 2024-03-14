import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipeModel';

@Component({
  selector: 'app-recipe-detailes',
  templateUrl: './recipe-detailes.component.html',
  styleUrl: './recipe-detailes.component.css'
})
export class RecipeDetailesComponent {

  public recipe!: Recipe
  public recipeId!: number
  public currentUser!:string
  constructor(private route: ActivatedRoute, private _recipeService: RecipeServiceService,private router: Router) { }

  ngOnInit(): void {
    this.currentUser=sessionStorage.getItem('username')!;
    this.route.params.subscribe((param) => {
      this.recipeId = param['id']
      this._recipeService.getRecipeById(this.recipeId).subscribe({
        next: (res) => {
          console.log(res);
          this.recipe = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
    
  }
  updateRecipe()
  {
      console.log("recipeD", this.recipe)
      this._recipeService.recipeToUpdate=this.recipe
      console.log("from ser", this._recipeService.recipeToUpdate)
      this.router.navigate(['/recipes/edit-recipe'])
  }
  deleteRecipe()
  {
    this.route.params.subscribe((param) => {
      this.recipeId = param['id']
      this._recipeService.deleteRecipe(this.recipeId).subscribe({
        next: (res) => {
          alert("המתכון נמחק בהצלחה")
          this.router.navigate(['/recipes/all-recipes'])
          
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
    
  }
}
