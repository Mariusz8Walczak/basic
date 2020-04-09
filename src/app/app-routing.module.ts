import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageContainerComponent } from './homepage/homepage-container/homepage-container.component';


const routes: Routes = [
  { path: '', component: HomepageContainerComponent },
  {
    path: 'lesson',
    children: [
      {
        path: '2',
        loadChildren: () => import('./lesson2/lesson2.module').then(m => m.Lesson2Module)
      },
      {
        path: '3',
        loadChildren: () => import('./lesson3/lesson3.module').then(m => m.Lesson3Module)
      },
      {
        path: '4',
        loadChildren: () => import('./lesson4/lesson4.module').then(m => m.Lesson4Module)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
