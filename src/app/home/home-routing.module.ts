import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from '../screen1/screen1.component';
import { Screen2Component } from '../screen2/screen2.component';
import { SummaryComponent } from '../summary/summary.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'summary', component: SummaryComponent
  },
  {
    path: 'screen1', component: Screen1Component
  },
  {
    path: 'screen2', component: Screen2Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
