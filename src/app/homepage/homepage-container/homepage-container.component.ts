import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.scss']
})
export class HomepageContainerComponent implements OnInit {

  public heroNameArray = ['Kamil', 'Mariusz', 'Ola', 'Paulina', 'El Mosqito'];

  constructor() {
  }

  ngOnInit() {
  }

  public showName(name) {
    const index = this.heroNameArray.indexOf(name);
    if (index !== -1) {
      this.heroNameArray.splice(index, 1);
    }
  }

}
