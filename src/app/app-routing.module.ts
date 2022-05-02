import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { Help2Component } from './help2/help2.component';
import { Help3Component } from './help3/help3.component';
import { HowtoComponent } from './howto/howto.component';
import { Howto2Component } from './howto2/howto2.component';
import { Howto3Component } from './howto3/howto3.component';
import { Howto4Component } from './howto4/howto4.component';
import { Howto5Component } from './howto5/howto5.component';
import { Howto6Component } from './howto6/howto6.component';
import { Howto7Component } from './howto7/howto7.component';
import { Howto8Component } from './howto8/howto8.component';
import { Howto9Component } from './howto9/howto9.component';
import { IfprematuroComponent } from './ifprematuro/ifprematuro.component';
import { Ifprematuro2Component } from './ifprematuro2/ifprematuro2.component';
import { PainComponent } from './pain/pain.component';
import { Pain2Component } from './pain2/pain2.component';
import { Pain3Component } from './pain3/pain3.component';
import { Pain4Component } from './pain4/pain4.component';
import { Pain5Component } from './pain5/pain5.component';
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
    path: 'about', component: AboutComponent,
    loadChildren: () => import('./about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'pain', component: PainComponent,
    loadChildren: () => import('./pain/pain.module').then( m => m.PainModule)
  },
  {
    path: 'pain2', component: Pain2Component,
    loadChildren: () => import('./pain/pain.module').then( m => m.PainModule)
  },
  {
    path: 'pain3', component: Pain3Component,
    loadChildren: () => import('./pain/pain.module').then( m => m.PainModule)
  },
  {
    path: 'pain4', component: Pain4Component,
    loadChildren: () => import('./pain/pain.module').then( m => m.PainModule)
  },
  {
    path: 'pain5', component: Pain5Component,
    loadChildren: () => import('./pain/pain.module').then( m => m.PainModule)
  },
  {
    path: 'help', component: HelpComponent,
    loadChildren: () => import('./help/help.module').then( m => m.HelpModule)
  },
  {
    path: 'help2', component: Help2Component,
    loadChildren: () => import('./help/help.module').then( m => m.HelpModule)
  },

  {
    path: 'help3', component: Help3Component,
    loadChildren: () => import('./help/help.module').then( m => m.HelpModule)
  },
  {
    path: 'how', component: HowtoComponent,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
  {
    path: 'how2', component: Howto2Component,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
  {
    path: 'how3', component: Howto3Component,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
  {
    path: 'how4', component: Howto4Component,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
  {
    path: 'how5', component: Howto5Component,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
  {
    path: 'how6', component: Howto6Component,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
  {
    path: 'how7', component: Howto7Component,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
  {
    path: 'how8', component: Howto8Component,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
  {
    path: 'how9', component: Howto9Component,
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
