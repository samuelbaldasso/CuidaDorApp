import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QuizRoutingModule } from './quiz-routing.module';
import { Quiz2Component } from '../quiz2/quiz2.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, QuizRoutingModule],
  declarations: [QuizComponent, Quiz2Component],
})
export class QuizModule {}
