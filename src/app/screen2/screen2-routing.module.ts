import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen2Component } from '../screen2/screen2.component';

const routes: Routes = [

  {
    path: 'screen2', component: Screen2Component
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Screen2RoutingModule {}
