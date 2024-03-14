import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeRoutesModule } from '../recipe.routes/recipe.routes.module';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailesComponent } from './recipe-detailes/recipe-detailes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { LogOutButtonComponent } from '../log-out-button/log-out-button.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HeaderComponent } from "../header/header.component";
import { ButtonModule } from 'primeng/button';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { HoursPipe } from '../../hours.pipe';
import { SidebarModule } from 'primeng/sidebar';
import { RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [AllRecipesComponent, RecipeDetailesComponent, SmallRecipeComponent, AddRecipeComponent,EditRecipeComponent],
    imports: [
        CommonModule, RecipeRoutesModule, LogOutButtonComponent, ReactiveFormsModule, FormsModule,HoursPipe,
        HeaderComponent,ButtonModule,RouterModule,SidebarModule,RatingModule,CheckboxModule,RadioButtonModule,CardModule,ToastModule
    ]
})
export class RecipeModuleModule { }
