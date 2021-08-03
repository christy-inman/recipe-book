import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private activeSessionSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public readonly activeSession$: Observable<boolean> = this.activeSessionSubject.asObservable();

  constructor() { }

  updateSession(status: boolean) {
    this.activeSessionSubject.next(status);
  }
}
