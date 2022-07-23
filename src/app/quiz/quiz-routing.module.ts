import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz2Component } from '../quiz2/quiz2.component';
import { QuizComponent } from './quiz.component';
import { Quiz3Component } from '../quiz3/quiz3.component';
import { Quiz4Component } from '../quiz4/quiz4.component';
import { Quiz5Component } from '../quiz5/quiz5.component';
import { Quiz6Component } from '../quiz6/quiz6.component';
import { Quiz7Component } from '../quiz7/quiz7.component';

const routes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent,
    children: [
      {
        path: 'quiz2',
        component: Quiz2Component,
      },
      {
        path: 'quiz3',
        component: Quiz3Component,
      },
      {
        path: 'quiz4',
        component: Quiz4Component,
      },
      {
        path: 'quiz5',
        component: Quiz5Component,
      },
      {
        path: 'quiz6',
        component: Quiz6Component,
      },
      {
        path: 'quiz7',
        component: Quiz7Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
