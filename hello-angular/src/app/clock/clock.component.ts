import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {

  @Input() delay = 1000;
  now = new Date();

  private _intervalId;

  ngOnInit() {
    this._intervalId = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  // -----1-----2-----3-----4-----5-----
  // ----------1-----2-----3-----4-----5--
  // ----------1-----2--x-----------5

  ngOnChanges(changes: SimpleChanges) {
    if (changes.delay.previousValue && changes.delay.currentValue !== changes.delay.previousValue) {
      clearInterval(this._intervalId);
      this._intervalId = setInterval(() => {
        this.now = new Date();
      }, changes.delay.currentValue);
    }
  }

  ngOnDestroy() {
    clearInterval(this._intervalId);
  }
}
