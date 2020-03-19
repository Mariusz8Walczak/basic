import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { HeroComponent } from './hero/hero.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [
    HomepageContainerComponent,
    HeroComponent,
    SiteMenuComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
