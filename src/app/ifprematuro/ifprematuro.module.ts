import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IfPrematuroRoutingModule } from './ifprematuro-routing.module';
import { IfprematuroComponent } from './ifprematuro.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IfPrematuroRoutingModule
  ],
  declarations: [IfprematuroComponent]
})
export class IfPrematuroModule {}
