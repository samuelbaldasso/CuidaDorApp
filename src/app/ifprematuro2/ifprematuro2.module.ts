import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IfPrematuro2RoutingModule } from './ifprematuro2-routing.module';
import { Ifprematuro2Component } from './ifprematuro2.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IfPrematuro2RoutingModule
  ],
  declarations: [Ifprematuro2Component]
})
export class IfPrematuro2Module {}
