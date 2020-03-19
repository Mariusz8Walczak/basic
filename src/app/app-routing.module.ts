import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageContainerComponent } from './homepage/homepage-container/homepage-container.component';


const routes: Routes = [
  { path: '', component: HomepageContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
