import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../101/employee';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
})
export class ComponentAComponent
  implements
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  name: string = 'Millea';
  address: string = 'Bandung';
  participants: string[] = ['Bulan', 'Bintang', 'Matahari'];
  languages = {
    name: 'Angular',
    status: 'Advanced',
  };

  isDisabled: boolean = true;

  onMessage(): string {
    return 'onMessage';
  }

  onViewLanguage(): string {
    return `${this.languages.name} ${this.languages.status}`;
  }

  employees = [
    {
      name: 'Adi',
      address: 'Bulan',
      unit: 'Keuangan',
    },
    {
      name: 'Adam',
      address: 'Matahari',
      unit: 'Audit',
    },
    {
      name: 'Rahma',
      address: 'Bintang',
      unit: 'IT',
    },
    {
      name: 'Fulan',
      address: 'Arab',
      unit: 'IT',
    },
  ];

  componentName = 'Component A';
  constructor() {
    console.log(`constructor ${this.componentName} called!`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes);
    console.log(`ngOnChanges ${this.componentName} called!`);
  }
  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName} called!`);
  }
  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName} called!`);
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck ${this.componentName} called!`);
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit ${this.componentName} called!`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked ${this.componentName} called!`);
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit ${this.componentName} called!`);
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked ${this.componentName} called!`);
  }

  // penerapan event binding
  message: string = '';
  showMe(): void {
    this.message = 'ah aku di klik';
  }

  // ini hanya contoh, harusnya semua prop itu di atas
  messageHover: string = 'Hover aku dong!';
  mouseOut() {
    this.messageHover = 'Lagi dong!';
  }
  mouseOver() {
    this.messageHover = 'Terimakasih sudah meng-hover aku!';
  }

  messageInput: string = '';
  onMessageInput($event: any): void {
    console.log('$event:', $event);
    console.log('$event.target.value:', $event.target.value);
    const { value } = $event.target;
    value.toLowerCase() === 'mandiri'
      ? (this.messageInput = 'Aku mandirian')
      : (this.messageInput = 'Aku tetep mandirian');
  }
}
