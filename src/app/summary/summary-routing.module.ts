import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen2Component } from '../screen2/screen2.component';
import { SummaryComponent } from './summary.component';

const routes: Routes = [

  {
    path: 'summary', component: SummaryComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule {}
