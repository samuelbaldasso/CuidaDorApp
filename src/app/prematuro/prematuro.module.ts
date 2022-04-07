import { PrematuroComponent } from './prematuro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {PrematuroRoutingModule} from './prematuro-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrematuroRoutingModule
  ],
  declarations: [PrematuroComponent]
})
export class PrematuroModule {}
