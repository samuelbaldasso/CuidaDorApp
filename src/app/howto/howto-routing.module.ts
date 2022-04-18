import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Howto2Component } from '../howto2/howto2.component';
import { Howto3Component } from '../howto3/howto3.component';
import { Howto4Component } from '../howto4/howto4.component';
import { Howto5Component } from '../howto5/howto5.component';
import { HowtoComponent } from './howto.component';



const routes: Routes = [
      {
        path: 'how', component: HowtoComponent, children: [
          {path: 'how2', component: Howto2Component},
          {path: 'how3', component: Howto3Component},
          {path: 'how4', component: Howto4Component},
          {path: 'how5', component: Howto5Component},
          // {path: 'Howto3', component: Howto7Component},
          // {path: 'how2', component: Howto8Component},
          // {path: 'Howto3', component: Howto9Component},
          // {path: 'how2', component: Howto10Component},
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowtoRoutingModule {}
