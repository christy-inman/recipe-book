import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipeModel as Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private allRecipesSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>(null);
	public readonly allRecipes$: Observable<Recipe[]> = this.allRecipesSubject.asObservable();

  constructor() { }
}
