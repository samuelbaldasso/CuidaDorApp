import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz6',
  templateUrl: './quiz6.component.html',
  styleUrls: ['./quiz6.component.scss'],
})
export class Quiz6Component implements OnInit {

  isTrue: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  selectedButton1() {
    this.isTrue = true;
    setTimeout(() => {
      this.router.navigateByUrl('/quiz7');
    }, 2000);
  }

  selectedButton2() {
    this.isTrue = false;
    const but = document.querySelector('.btn2');
    but.classList.remove('hide');
  }
}
