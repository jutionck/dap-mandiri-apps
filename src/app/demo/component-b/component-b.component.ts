import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  // properti untuk menangkap path variabelnya
  id: string = '0';

  constructor(
    // ini bersifat observable
    // jadi kita harus melakukan subscribe
    private readonly route: ActivatedRoute
  ) { }

  // lifecycle
  // ngOnInit -> akan di panggil ketika component ini di panggil
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        console.log('params:', params['id']);
        console.log('typeof params:', typeof params['id']);
        console.log('typeof this.id:', typeof this.id);
        const temp = Number(params['id']);
        console.log('temp:', temp);
        if (temp) {
          this.id = params['id']; // re-assign
        }
      }
    })
  }

  message: string = '';
  onChangeMessage($event: any): void {
    const { value } = $event.target;
    console.log(value)
    if (value === 'admin') {
      this.message = value;
    } else {
      this.message = 'anda bukan admin';
    }
  }
}
