import { Prematuro2Component } from './prematuro2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {Prematuro2RoutingModule} from './prematuro2-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prematuro2RoutingModule
  ],
  declarations: [Prematuro2Component]
})
export class Prematuro2Module {}
