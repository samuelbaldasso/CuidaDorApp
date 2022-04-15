
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Help2Component } from '../help2/help2.component';
import { Help3Component } from '../help3/help3.component';
import { HelpComponent } from './help.component';


const routes: Routes = [
      {
        path: 'help', component: HelpComponent, children: [
          {path: 'help2', component: Help2Component},
          {path: 'help3', component: Help3Component},
          // {path: 'pain4', component: Pain4Component},
          // {path: 'pain5', component: Pain5Component}
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule {}
