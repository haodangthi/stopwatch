import { Injectable } from '@angular/core';
import { empty, fromEvent, interval, merge, Observable, of } from 'rxjs';
import { map, buffer, filter, debounceTime, mapTo, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timer$ = interval(1000)
  startClicks$: Observable<boolean>
  waitClicks$: Observable<Event>
  resetClicks$: Observable<string>
  doubleClick$: Observable<boolean>
  buttonsClicked$: Observable<string | number>

  initObservables(): void {
    this.startClicks$ = fromEvent(document.querySelector('#start'), 'click')
      .pipe(
        mapTo(true)
      )
    this.waitClicks$ = fromEvent(document.querySelector('#wait'), 'click')
    this.resetClicks$ = fromEvent(document.querySelector('#reset'), 'click')
      .pipe(
        map(() => 'reset')
      )

    this.doubleClick$ = this.timer$.pipe(
      buffer(this.waitClicks$.pipe(debounceTime(300))),
      map(clicks => clicks.length),
      filter(length => length > 1),
      mapTo(false)
    )

    this.buttonsClicked$ = merge(this.startClicks$, this.doubleClick$, this.resetClicks$)
      .pipe(
        switchMap(click =>
          click === 'reset' 
            ? of('reset') 
            : (click ? this.timer$ : empty())
        )
      )
    }
}
