import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  title: string = 'title from parent.component gaes';
  counter: number = 0;
  mandirian: string = '';
  constructor() { }

  ngOnInit(): void { }

  onChangeCounter(count: number): void {
    this.counter = count;
  }

  onChangeMandirian(text: any): string {
    return text.toLowerCase() === 'mandiri'
      ? (this.mandirian = 'aku mandirian')
      : (this.mandirian = 'aku tetap mandirian');
  }
}
