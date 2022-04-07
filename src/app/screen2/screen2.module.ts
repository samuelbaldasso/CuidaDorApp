import { Screen2Component } from './screen2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Screen2RoutingModule } from './screen2-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Screen2RoutingModule
  ],
  declarations: [Screen2Component]
})
export class Screen2Module {}
