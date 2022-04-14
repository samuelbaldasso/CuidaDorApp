
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pain2Component } from '../pain2/pain2.component';
import { Pain3Component } from '../pain3/pain3.component';
import { Pain4Component } from '../pain4/pain4.component';
import { Pain5Component } from '../pain5/pain5.component';
import { PainComponent } from './pain.component';

const routes: Routes = [
      {
        path: 'pain', component: PainComponent, children: [
          {path: 'pain2', component: Pain2Component},
          {path: 'pain3', component: Pain3Component},
          {path: 'pain4', component: Pain4Component},
          {path: 'pain5', component: Pain5Component}
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainRoutingModule {}
