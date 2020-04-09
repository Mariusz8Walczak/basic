import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map, max, switchMap, tap} from 'rxjs/operators';
import {isNumber} from 'util';
import {of} from 'rxjs';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log('log');

    this.loadData();
  }

  loadData() {
    // this.http.get('assets/jsons/longshitty.json').pipe(
    //   switchMap(x => x.data),
    //   filter(x => x !== undefined),
    //   map(x => x.widget),
    //   filter(x => x !== undefined),
    //   filter(x => isNumber(x.window.height)),
    //   map(x => x.image),
    //   map(x => x.hOffset ** 2),
    //   max()
    // ).subscribe(x => console.log(x));
  }

  testing(testVariable) {
    console.log(testVariable);
  }
}
