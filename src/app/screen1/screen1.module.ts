import { Screen1Component } from './screen1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Screen1RoutingModule } from './screen1-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Screen1RoutingModule
  ],
  declarations: [Screen1Component]
})
export class Screen1Module {}
