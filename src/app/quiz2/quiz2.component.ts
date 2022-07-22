import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.scss'],
})
export class Quiz2Component implements OnInit {
  constructor() {}

  ngOnInit() {
    this.selectedButton();
  }

  selectedButton() {
    const tryAgain = document.querySelector('.btn-wrong');
    const gotcha = document.querySelector('.btn-right');
    gotcha.classList.add('ion-hide');
    tryAgain.classList.add('ion-hide');
    document.addEventListener('click', (e: any) => {
      const el = e.target;
      if (el.classList.contains('right')) {
        tryAgain.classList.add('ion-hide');
        gotcha.classList.remove('ion-hide');
        setTimeout(() => {
          gotcha.classList.add('ion-hide');
        }, 5000);
      }
    });

    document.addEventListener('click', (e: any) => {
      const el = e.target;
      if (el.classList.contains('wrong')) {
        gotcha.classList.add('ion-hide');
        tryAgain.classList.remove('ion-hide');
        setTimeout(() => {
          tryAgain.classList.add('ion-hide');
        }, 5000);
      }
    });
  }
}
