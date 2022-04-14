
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pain2Component } from './pain2.component';

const routes: Routes = [
      {
        path: 'pain2', component: Pain2Component
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pain2RoutingModule {}
