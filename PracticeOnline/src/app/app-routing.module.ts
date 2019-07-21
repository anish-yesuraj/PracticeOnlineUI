import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AyLayoutComponent } from './ay-layout/ay-layout.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: AyLayoutComponent,
    children: [{
      path: '',
      loadChildren: './ay-layout/ay-layout.module#AyLayoutModule'
    }]
  } 
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
