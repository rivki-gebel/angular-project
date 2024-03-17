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
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { HoursPipe } from '../../hours.pipe';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule}from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
    declarations: [AllRecipesComponent, RecipeDetailesComponent, SmallRecipeComponent, AddRecipeComponent,EditRecipeComponent],
    imports: [
        CommonModule, RecipeRoutesModule, LogOutButtonComponent, ReactiveFormsModule, FormsModule,HoursPipe,
        HeaderComponent,ButtonModule,RouterModule,SidebarModule,RatingModule,CheckboxModule,RadioButtonModule,CardModule,ToastModule,MatIconModule,
        MatButtonModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatDividerModule
    ]
})
export class RecipeModuleModule { }
