import { Ifprematuro2Component } from './ifprematuro2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: 'ifprematuro2', component: Ifprematuro2Component
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IfPrematuro2RoutingModule {}
