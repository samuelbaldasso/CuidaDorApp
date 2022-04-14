import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Pain2RoutingModule } from './pain2-routing.module';
import { Pain2Component } from './pain2.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pain2RoutingModule
  ],
  declarations: [Pain2Component]
})
export class Pain2Module {}
