import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SplashComponent } from './splash.component';
import { SplashRoutingModule } from './splash-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashRoutingModule
  ],
  declarations: [SplashComponent]
})
export class SplashModule { }
