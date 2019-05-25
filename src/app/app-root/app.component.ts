import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'app/shared/nav-bar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  showNavBar$: Observable<boolean>;

  constructor(private navBarService: NavBarService) {
  }
  
  ngOnInit(){
    this.showNavBar$ = this.navBarService.showNavBar$
  }
}
