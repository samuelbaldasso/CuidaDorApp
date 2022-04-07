import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrematuroComponent } from '../prematuro/prematuro.component';

const routes: Routes = [
      {
        path: 'prematuro', component: PrematuroComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrematuroRoutingModule {}
