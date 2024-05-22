import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppChunksRoutingModule } from './app-chunks-routing.module';
import { App1HeaderComponent } from './app-1/components/header/app1-header.component';
import { App1ShoppingListComponent } from './app-1/components/shopping-list/app1-shopping-list.component';
import { App1ShoppingEditComponent } from './app-1/components/shopping-list/shopping-edit/app1-shopping-edit.component';
import { App1HouseComponent } from './app-1/app1-house.component';
import { App1RecipesComponent } from './app-1/components/recipes/app1-recipes.component';
import { App1RecipeListComponent } from './app-1/components/recipes/recipe-list/app1-recipe-list.component';
import { App1RecipeComponent } from './app-1/components/recipes/recipe-list/recipe/app1-recipe.component';
import { App1RecipeDetailComponent } from './app-1/components/recipes/recipe-detail/app1-recipe-detail.component';

@NgModule({
  declarations: [
    App1HouseComponent,
    App1HeaderComponent,
    App1RecipesComponent,
    App1RecipeListComponent,
    App1RecipeDetailComponent,
    App1RecipeComponent,
    App1ShoppingListComponent,
    App1ShoppingEditComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, AppChunksRoutingModule],
})
export class AppChunksModule {}
