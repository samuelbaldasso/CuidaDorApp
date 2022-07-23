import { Quiz7Component } from './../quiz7/quiz7.component';
import { Quiz6Component } from './../quiz6/quiz6.component';
import { Quiz5Component } from './../quiz5/quiz5.component';
import { Quiz4Component } from './../quiz4/quiz4.component';
import { Quiz3Component } from './../quiz3/quiz3.component';
import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QuizRoutingModule } from './quiz-routing.module';
import { Quiz2Component } from '../quiz2/quiz2.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, QuizRoutingModule],
  declarations: [
    QuizComponent,
    Quiz2Component,
    Quiz3Component,
    Quiz4Component,
    Quiz5Component,
    Quiz6Component,
    Quiz7Component,
  ],
})
export class QuizModule {}
