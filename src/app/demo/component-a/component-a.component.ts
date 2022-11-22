import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  name: string = 'Millea';
  address: string = 'Bandung';
  participants: string[] = ['Bulan', 'Bintang', 'Matahari'];
  languages = {
    name: 'Angular',
    status: 'Advanced'
  }

  isDisabled: boolean = true;

  onMessage(): string {
    return 'onMessage';
  }

  onViewLanguage(): string {
    return `${this.languages.name} ${this.languages.status}`
  }

  employees = [
    {
      name: 'Adi',
      address: 'Bulan',
      unit: 'Keuangan'
    },
    {
      name: 'Adam',
      address: 'Matahari',
      unit: 'Audit'
    },
    {
      name: 'Rahma',
      address: 'Bintang',
      unit: 'IT'
    },
    {
      name: 'Fulan',
      address: 'Arab',
      unit: 'IT'
    }
  ]

  constructor(
    // private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = !this.isDisabled
    }, 5000);
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
    value.toLowerCase() === 'mandiri' ? this.messageInput = 'Aku mandirian' : this.messageInput = 'Aku tetep mandirian';
  }
}
