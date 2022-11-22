import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() title: string = '';

  // Two-Way Data Binding
  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter<number>()

  // Two-Way Data Binding
  @Input() mandirian: string = '';
  @Output() mandirianChange = new EventEmitter<string>()

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onIncrease() {
    this.count++;
    this.counterChange.emit(this.count);
  }

  onDecrease() {
    this.count--;
    this.counterChange.emit(this.count);
  }

  onChangeMessage(e: any): void {
    const { value } = e.target;
    this.mandirianChange.emit(value);
  }
}
