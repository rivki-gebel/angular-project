import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private _recipeService: RecipeServiceService) { }

  ngOnInit(): void {
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

}
