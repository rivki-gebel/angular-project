import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutesModule } from '../recipe.routes/recipe.routes.module';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailesComponent } from './recipe-detailes/recipe-detailes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { LogOutButtonComponent } from '../log-out-button/log-out-button.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';



@NgModule({
  declarations: [AllRecipesComponent, RecipeDetailesComponent,SmallRecipeComponent,AddRecipeComponent],
  imports: [
    CommonModule, RecipeRoutesModule,LogOutButtonComponent
  ]
})
export class RecipeModuleModule { }
