import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingService } from './landing-page/landing.service';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe Book';
  
	public readonly activeSession$: Observable<boolean> = this.landingService.activeSession$;
  public readonly allRecipes$: Observable<boolean> = this.recipeService.allRecipes$;

  constructor (
		private landingService: LandingService,
    private recipeService: RecipeService
	      ) {}

}
