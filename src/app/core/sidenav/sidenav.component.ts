import { Component } from '@angular/core';
import { AppRoutes } from 'app/shared/constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  homeUrl = `/${AppRoutes.HOME}`;

  constructor() {
  }

}
