import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PainRoutingModule } from './pain-routing.module';
import { PainComponent } from './pain.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainRoutingModule
  ],
  declarations: [PainComponent]
})
export class PainModule {}
