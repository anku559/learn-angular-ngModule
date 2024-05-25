import { Component } from '@angular/core';
import { App1RecipeModel } from '../recipe.model';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app1-recipe-list',
  templateUrl: './app1-recipe-list.component.html',
  styleUrl: './app1-recipe-list.component.scss',
})
export class App1RecipeListComponent {
  recipes: App1RecipeModel[] = [
    new App1RecipeModel('Recipe 1', 'Healthy', faker.image.url()),
    new App1RecipeModel('Recipe 2', 'Healthy', faker.image.url()),
    new App1RecipeModel('Recipe 3', 'Healthy', faker.image.url()),
    new App1RecipeModel('Recipe 4', 'Healthy', faker.image.url()),
    new App1RecipeModel('Recipe 5', 'Healthy', faker.image.url()),
  ];
}
