import { Prematuro2Component } from './prematuro2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: 'prematuro2', component: Prematuro2Component
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Prematuro2RoutingModule {}
