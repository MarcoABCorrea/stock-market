import { Component } from '@angular/core';
import { NavBarService } from 'app/shared/nav-bar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {

  showNavBar$: Observable<boolean>;;

  constructor(private navBarService: NavBarService) {
  }

  ngOnInit(){
    this.showNavBar$ = this.navBarService.showNavBar$;
  }

  toggleNavBar() {
    this.navBarService.toggleNavBar();
  }
}