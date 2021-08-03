import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // clear browser storage
    this.setSession();
  }

  private setSession() {
    // publish to observable, watch it for session check in app.html
    // set browser session storage
  }

}
