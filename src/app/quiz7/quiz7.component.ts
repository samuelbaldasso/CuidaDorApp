import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz7',
  templateUrl: './quiz7.component.html',
  styleUrls: ['./quiz7.component.scss'],
})
export class Quiz7Component implements OnInit {

  isTrue: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  selectedButton1() {
    this.isTrue = true;
    setTimeout(() => {
      this.router.navigateByUrl('/about');
    }, 2000);
  }

  selectedButton2() {
    this.isTrue = false;
    const but = document.querySelector('.btn2');
    but.classList.remove('hide');
  }
}
