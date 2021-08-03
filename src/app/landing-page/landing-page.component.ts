import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { LandingService } from './landing.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  constructor(private landingService: LandingService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    
  }

  getStarted() {
    this.setSession();
    // GET all recipes
    this.recipeService.getAllRecipes();
  }

  private setSession() {
    // publish to observable, watch it for session check in app.html
    this.landingService.updateSession(true)
    
    // set browser session storage
  }

}
