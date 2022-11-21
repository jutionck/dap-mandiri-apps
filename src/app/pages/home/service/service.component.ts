import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  services: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getService();
  }

  getService(): void {
    const services = [
      {
        title: 'Virtual',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Iure, quas quidem possimus dolorum esse eligendi?`,
        icon: 'bi bi-laptop',
      },
      {
        title: 'Hybrid',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Iure, quas quidem possimus dolorum esse eligendi?`,
        icon: 'bi bi-cast',
      },
      {
        title: 'In Person',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Iure, quas quidem possimus dolorum esse eligendi?`,
        icon: 'bi bi-emoji-wink',
      }
    ];
    this.services = services;
  }

}
