import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Example1Component} from './example1/example1.component';


const routes: Routes = [
  { path: '', children: [
      {path: '1', component: Example1Component},
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lesson4RoutingModule {}
