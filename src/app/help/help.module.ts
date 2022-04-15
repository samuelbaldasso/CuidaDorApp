import { HelpRoutingModule } from './help-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HelpComponent } from './help.component';
import { Help2Component } from '../help2/help2.component';
import { Help3Component } from '../help3/help3.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpRoutingModule
  ],
  declarations: [HelpComponent, Help2Component, Help3Component]
})
export class HelpModule{}
