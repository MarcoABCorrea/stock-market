import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'app/shared/constants';

@Component({
  selector: 'dd-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  homeUrl:string = `/${AppRoutes.HOME}`;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
