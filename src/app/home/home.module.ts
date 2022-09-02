import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {RoutesPaths} from "./home.routing";
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(RoutesPaths),
    SharedModule
  ],
  exports:[
    RouterModule
  ]
})
export class HomeModule { }
