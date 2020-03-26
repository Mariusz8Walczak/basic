import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit, OnDestroy {

  private subject: Subject<boolean>; //event emmiter dla observable
  private someSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const someObservable = this.getSomeObservable();
    console.log('odpalanie subscribe');
    this.launchObservable(someObservable);

    console.log('odpalanie unsubscribe');
    this.someSubscription = this.getSomeObservable().subscribe();

    console.log('odpalanie pipe');
    this.pipeObservable(someObservable);

    console.log('odpalanie map');
    this.mapObservable(someObservable);

    console.log('odpalanie subject');
    this.subjectObservable();

    console.log('koncieczenia za pomoca takeUntil');
    this.endingObservable(someObservable);
  }

  private getSomeObservable() {
    return new Observable<number>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
  }

  pipeObservable(someObservable: Observable<number>) {
    someObservable.pipe(

    );
  }

  launchObservable(someObservable: Observable<number>) {
    console.log('start')
    someObservable.subscribe({
      next(x) { console.log('mamy ' + x); },
      error(err) { console.error('jakis błąd ' + err); },
      complete() { console.log('koniec'); }
    });
    console.log('koniec');
  }

  mapObservable(someObservable: Observable<number>) {
    someObservable.pipe(
      map(x => console.log(x * 10))
    );
  }

  endingObservable(someObservable: Observable<number>){
    someObservable.pipe(
      takeUntil(this.subject)
    );
  }

  subjectObservable() {
    this.subject = new Subject<boolean>();
  }

  ngOnDestroy(): void {
    this.someSubscription.unsubscribe();

    this.subject.next(true);
    this.subject.complete();
  }

}
