import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    
  }

  getStarted() {
    this.setSession();
    // GET all recipes
    
    // publish to observable, watch for it in the home page component for loading screen
  }

  private setSession() {
    // publish to observable, watch it for session check in app.html
    this.landingService.updateSession(true)
    
    // set browser session storage
  }

}
