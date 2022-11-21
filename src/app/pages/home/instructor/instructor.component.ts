import { Component, OnInit } from '@angular/core';
import { Instructor } from './model/instructor.model';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  // buat properti untuk di store ke view
  instructors: Instructor[] = [];
  constructor() { }

  ngOnInit(): void {
    // panggil disini supaya properti terisi
    this.getInstructor();
  }

  // method ini sebagai isian dari properti yang dibuat
  getInstructor(): void {
    const instructors: Instructor[] = [
      {
        name: 'Jution CK',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.`,
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link: '',
          },
          {
            icon: 'bi bi-facebook',
            link: '',
          },
          {
            icon: 'bi bi-linkedin',
            link: '',
          },
          {
            icon: 'bi bi-instagram',
            link: '',
          }
        ]
      },
      {
        name: 'Tika Yesi',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.`,
        img: 'https://randomuser.me/api/portraits/women/11.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link: '',
          },
          {
            icon: 'bi bi-facebook',
            link: '',
          },
          {
            icon: 'bi bi-linkedin',
            link: '',
          },
          {
            icon: 'bi bi-instagram',
            link: '',
          }
        ]
      },
      {
        name: 'Doni Octo',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.`,
        img: 'https://randomuser.me/api/portraits/men/12.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link: '',
          },
          {
            icon: 'bi bi-facebook',
            link: '',
          },
          {
            icon: 'bi bi-linkedin',
            link: '',
          },
          {
            icon: 'bi bi-instagram',
            link: '',
          }
        ]
      },
      {
        name: 'Stevano Suwuh',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.`,
        img: 'https://randomuser.me/api/portraits/men/10.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link: '',
          },
          {
            icon: 'bi bi-facebook',
            link: '',
          },
          {
            icon: 'bi bi-linkedin',
            link: '',
          },
          {
            icon: 'bi bi-instagram',
            link: '',
          }
        ]
      }
    ];
    // assign properti di atas dengan variabel baris ke 22;
    this.instructors = instructors;
  }

}
