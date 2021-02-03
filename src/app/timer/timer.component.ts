import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit, OnDestroy {
  seconds: number = 0
  timerSubscribtion: Subscription
  doubleClickSubscribtion: Subscription

  constructor(private timerService: TimerService) { }

  ngAfterViewInit(): void {
    this.timerService.initObservables()
    this.timerSubscribtion = this.timerService.buttonsClicked$
      .subscribe((res) => {
        debugger
        if(res === 'reset') {
          this.seconds = 0
        } else {
          this.seconds++
        }
      })
  }

  ngOnDestroy(): void {
    this.timerSubscribtion.unsubscribe()
  }
}
