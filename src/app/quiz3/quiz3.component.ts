import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz3',
  templateUrl: './quiz3.component.html',
  styleUrls: ['./quiz3.component.scss'],
})
export class Quiz3Component implements OnInit {
  isTrue: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  selectedButton1() {
    this.isTrue = true;
    setTimeout(() => {
      this.router.navigateByUrl('/quiz4');
    }, 2000);
  }

  selectedButton2() {
    this.isTrue = false;
    const but = document.querySelector('.btn2');
    but.classList.remove('hide');
  }
}
