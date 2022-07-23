import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz5',
  templateUrl: './quiz5.component.html',
  styleUrls: ['./quiz5.component.scss'],
})
export class Quiz5Component implements OnInit {

  isTrue: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  selectedButton1() {
    this.isTrue = true;
    setTimeout(() => {
      this.router.navigateByUrl('/quiz6');
    }, 2000);
  }

  selectedButton2() {
    this.isTrue = false;
    const but = document.querySelector('.btn2');
    but.classList.remove('hide');
  }
}
