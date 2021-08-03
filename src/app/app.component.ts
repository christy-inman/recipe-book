import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingService } from './landing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe Book';
  
	public readonly activeSession$: Observable<boolean> = this.landingService.activeSession$;

  constructor (
		private landingService: LandingService
	      ) {}

}
