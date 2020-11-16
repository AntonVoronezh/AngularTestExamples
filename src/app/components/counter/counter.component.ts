import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '{{counter}}'
})
export class CounterComponent {
  counter = 0;
  @Output() EventEmitter = new EventEmitter<number>();

  plus(): void {
    this.counter++;
    this.EventEmitter.emit(this.counter);
  }

  minus(): void {
    this.counter--;
  }
}
