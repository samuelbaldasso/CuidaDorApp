
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainComponent } from './pain.component';

const routes: Routes = [
      {
        path: 'pain', component: PainComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainRoutingModule {}
