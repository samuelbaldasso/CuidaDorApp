import { Howto5Component } from './../howto5/howto5.component';
import { HowtoRoutingModule } from './howto-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HowtoComponent } from './howto.component';
import { Howto2Component } from '../howto2/howto2.component';
import { Howto3Component } from '../howto3/howto3.component';
import { Howto4Component } from '../howto4/howto4.component';
import { Howto6Component } from '../howto6/howto6.component';
import { Howto7Component } from '../howto7/howto7.component';
import { Howto8Component } from '../howto8/howto8.component';
import { Howto9Component } from '../howto9/howto9.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HowtoRoutingModule],
  declarations: [
    HowtoComponent,
    Howto2Component,
    Howto3Component,
    Howto4Component,
    Howto5Component,
    Howto6Component,
    Howto7Component,
    Howto8Component,
    Howto9Component
  ],
})
export class HowtoModule {}
