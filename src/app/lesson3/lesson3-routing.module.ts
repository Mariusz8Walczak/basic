import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Example1Component} from './example1/example1.component';
import {Example2Component} from './example2/example2.component';
import {Example3Component} from './example3/example3.component';


const routes: Routes = [
  { path: '', children: [
      {path: '1', component: Example1Component},
      {path: '2', component: Example2Component},
      {path: '3', component: Example3Component},
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lesson3RoutingModule {}
