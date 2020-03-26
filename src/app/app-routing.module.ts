import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageContainerComponent } from './homepage/homepage-container/homepage-container.component';


const routes: Routes = [
  { path: '', component: HomepageContainerComponent },
  {
    path: 'lessons',
    loadChildren: () => import('./lesson2/lesson2.module').then(m => m.Lesson2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
