import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  title: string = 'Become a';
  subTitle: string = 'Web Developer';
  description: string = `
    We focus on teaching our students the fundamentals of the latest
    and greatest technologies to prepare them for their first dev role
  `;
  btnEnroll: string = 'Start The Enrollment';
  image = {
    src: 'assets/images/1.png',
    alt: 'Enroll course'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
