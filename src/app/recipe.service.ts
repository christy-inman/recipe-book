import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private allRecipesSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public readonly allRecipes$: Observable<boolean> = this.allRecipesSubject.asObservable();

  constructor() { }
}
