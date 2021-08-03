import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipeModel as Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private allRecipesSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>(null);
	public readonly allRecipes$: Observable<Recipe[]> = this.allRecipesSubject.asObservable();

  recipeUrl = 'http://localhost:4199/recipes'

  constructor(private http: HttpClient) { } 
  
  
  getAllRecipes() {
    this.http.get<Recipe[]>(this.recipeUrl).subscribe((recipeData: Recipe[]) => {
      console.log(recipeData)
      if(recipeData) {
        this.allRecipesSubject.next(recipeData)
        console.log(this.allRecipes$)
      }
    })
  }
}
