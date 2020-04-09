import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';
import {Lesson4RoutingModule} from './lesson4-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [Example1Component],
  imports: [
    CommonModule,
    Lesson4RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Lesson4Module { }
