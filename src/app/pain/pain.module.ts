import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PainRoutingModule } from './pain-routing.module';
import { PainComponent } from './pain.component';
import { Pain2Component } from '../pain2/pain2.component';
import { Pain3Component } from '../pain3/pain3.component';
import { Pain4Component } from '../pain4/pain4.component';
import { Pain5Component } from '../pain5/pain5.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainRoutingModule
  ],
  declarations: [PainComponent, Pain2Component, Pain3Component, Pain4Component, Pain5Component]
})
export class PainModule {}
