import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz4',
  templateUrl: './quiz4.component.html',
  styleUrls: ['./quiz4.component.scss'],
})
export class Quiz4Component implements OnInit {
  isTrue: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  selectedButton1() {
    this.isTrue = true;
    setTimeout(() => {
      this.router.navigateByUrl('/quiz5');
    }, 2000);
  }

  selectedButton2() {
    this.isTrue = false;
    const but = document.querySelector('.btn2');
    but.classList.remove('hide');
  }
}
