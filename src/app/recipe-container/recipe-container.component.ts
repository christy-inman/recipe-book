import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../recipes/recipe.service';
import { RecipeModel as Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-container',
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.scss']
})
export class RecipeContainerComponent implements OnInit {
  public readonly allRecipes$: Observable<Recipe[]> = this.recipeService.allRecipes$;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
  }

}
