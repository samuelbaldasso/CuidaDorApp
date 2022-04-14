import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IfprematuroComponent } from './ifprematuro/ifprematuro.component';
import { Ifprematuro2Component } from './ifprematuro2/ifprematuro2.component';
import { PainComponent } from './pain/pain.component';
import { Pain2Component } from './pain2/pain2.component';
import { PrematuroComponent } from './prematuro/prematuro.component';
import { Prematuro2Component } from './prematuro2/prematuro2.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'summary', component: SummaryComponent,
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryModule)
  },
  {
    path: 'screen1', component: Screen1Component,
    loadChildren: () => import('./screen1/screen1.module').then( m => m.Screen1Module)
  },
  {
    path: 'screen2', component: Screen2Component,
    loadChildren: () => import('./screen2/screen2.module').then( m => m.Screen2Module)
  },
  {
    path: 'prematuro', component: PrematuroComponent,
    loadChildren: () => import('./prematuro/prematuro.module').then( m => m.PrematuroModule)
  },
  {
    path: 'prematuro2', component: Prematuro2Component,
    loadChildren: () => import('./prematuro2/prematuro2.module').then( m => m.Prematuro2Module)
  },
  {
    path: 'ifprematuro', component: IfprematuroComponent,
    loadChildren: () => import('./ifprematuro/ifprematuro.module').then( m => m.IfPrematuroModule)
  },
  {
    path: 'ifprematuro2', component: Ifprematuro2Component,
    loadChildren: () => import('./ifprematuro2/ifprematuro2.module').then( m => m.IfPrematuro2Module)
  },
  {
    path: 'pain', component: PainComponent,
    loadChildren: () => import('./pain/pain.module').then( m => m.PainModule)
  },
  {
    path: 'pain2', component: Pain2Component,
    loadChildren: () => import('./pain2/pain2.module').then( m => m.Pain2Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
