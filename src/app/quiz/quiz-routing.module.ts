import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz2Component } from '../quiz2/quiz2.component';
import { QuizComponent } from './quiz.component';

const routes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent,
    children: [
      {
        path: 'quiz2',
        component: Quiz2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
