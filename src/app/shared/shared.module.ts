import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NavBarService } from './nav-bar.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule
  ],
  providers:[
    NavBarService
  ]
})
export class SharedModule { }
