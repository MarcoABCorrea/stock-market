import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavBarService {
  public showNavBar$: BehaviorSubject<boolean>;
  private _showNavBar = true;
  

  constructor() {
    this.showNavBar$ = new BehaviorSubject(this._showNavBar);
  }

  toggleNavBar() {
    this._showNavBar = !this._showNavBar;
    this.showNavBar$.next(this._showNavBar);
  }

}
