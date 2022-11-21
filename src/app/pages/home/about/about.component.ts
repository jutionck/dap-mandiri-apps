import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about = {
    title: 'About Us',
    descLead: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Similique deleniti possimus magnam corporis ratione facere!`,
    descThin: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
  reiciendis eius autem eveniet mollitia, at asperiores suscipit
  quae similique laboriosam iste minus placeat odit velit quos,
  nulla architecto amet voluptates?`,
    image: 'assets/images/angular.png',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
