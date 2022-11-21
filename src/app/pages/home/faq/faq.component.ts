import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  faqs: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getFaqs();
  }

  getFaqs(): void {
    const faqs = [
      {
        question: 'Where exactly are you located?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      beatae fuga animi distinctio perspiciatis adipisci velit maiores
      totam tempora accusamus modi explicabo accusantium consequatur,
      praesentium rem quisquam molestias at quos vero. Officiis ad
      velit doloremque at. Dignissimos praesentium necessitatibus
      natus corrupti cum consequatur aliquam! Minima molestias iure
      quam distinctio velit.`,
      },
      {
        question: 'How much does it cost to attend?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      beatae fuga animi distinctio perspiciatis adipisci velit maiores
      totam tempora accusamus modi explicabo accusantium consequatur,
      praesentium rem quisquam molestias at quos vero. Officiis ad
      velit doloremque at. Dignissimos praesentium necessitatibus
      natus corrupti cum consequatur aliquam! Minima molestias iure
      quam distinctio velit.`,
      },
      {
        question: 'What do I need to Know?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      beatae fuga animi distinctio perspiciatis adipisci velit maiores
      totam tempora accusamus modi explicabo accusantium consequatur,
      praesentium rem quisquam molestias at quos vero. Officiis ad
      velit doloremque at. Dignissimos praesentium necessitatibus
      natus corrupti cum consequatur aliquam! Minima molestias iure
      quam distinctio velit.`,
      },
      {
        question: 'How Do I sign up?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      beatae fuga animi distinctio perspiciatis adipisci velit maiores
      totam tempora accusamus modi explicabo accusantium consequatur,
      praesentium rem quisquam molestias at quos vero. Officiis ad
      velit doloremque at. Dignissimos praesentium necessitatibus
      natus corrupti cum consequatur aliquam! Minima molestias iure
      quam distinctio velit.`,
      },
      {
        question: ' Do you help me find a job?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      beatae fuga animi distinctio perspiciatis adipisci velit maiores
      totam tempora accusamus modi explicabo accusantium consequatur,
      praesentium rem quisquam molestias at quos vero. Officiis ad
      velit doloremque at. Dignissimos praesentium necessitatibus
      natus corrupti cum consequatur aliquam! Minima molestias iure
      quam distinctio velit.`,
      },
    ];
    this.faqs = faqs;
  }
}
