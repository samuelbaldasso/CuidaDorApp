import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryRoutingModule
  ],
  declarations: [SummaryComponent]
})
export class SummaryModule {}
