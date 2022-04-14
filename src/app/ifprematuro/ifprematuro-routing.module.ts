import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfprematuroComponent } from '../ifprematuro/ifprematuro.component';

const routes: Routes = [
      {
        path: 'ifprematuro', component: IfprematuroComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IfPrematuroRoutingModule {}
