import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson2Component } from './lesson2/lesson2.component';
import {Lesson2RoutingModule} from './lesson2-routing.module';



@NgModule({
  declarations: [Lesson2Component],
  imports: [
    CommonModule,
    Lesson2RoutingModule
  ]
})
export class Lesson2Module { }
