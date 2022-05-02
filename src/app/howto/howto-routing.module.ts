import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Howto2Component } from '../howto2/howto2.component';
import { Howto3Component } from '../howto3/howto3.component';
import { Howto4Component } from '../howto4/howto4.component';
import { Howto5Component } from '../howto5/howto5.component';
import { Howto6Component } from '../howto6/howto6.component';
import { Howto7Component } from '../howto7/howto7.component';
import { Howto8Component } from '../howto8/howto8.component';
import { Howto9Component } from '../howto9/howto9.component';
import { HowtoComponent } from './howto.component';



const routes: Routes = [
      {
        path: 'how', component: HowtoComponent, children: [
          {path: 'how2', component: Howto2Component},
          {path: 'how3', component: Howto3Component},
          {path: 'how4', component: Howto4Component},
          {path: 'how5', component: Howto5Component},
          {path: 'how6', component: Howto6Component},
          {path: 'how7', component: Howto7Component},
          {path: 'how8', component: Howto8Component},
          {path: 'how9', component: Howto9Component},
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowtoRoutingModule {}
