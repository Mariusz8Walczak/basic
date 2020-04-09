import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import {Lesson3RoutingModule} from './lesson3-routing.module';



@NgModule({
  declarations: [Example1Component, Example2Component, Example3Component],
  imports: [
    CommonModule,
    Lesson3RoutingModule
  ]
})
export class Lesson3Module { }
