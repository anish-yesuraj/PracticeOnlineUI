import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AyLeftnavComponent } from './ay-leftnav/ay-leftnav.component';
import { AyHeaderComponent } from './ay-header/ay-header.component';
import { AyFooterComponent } from './ay-footer/ay-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AyLeftnavComponent,
    AyHeaderComponent,
    AyFooterComponent
],
exports: [
    AyLeftnavComponent,
    AyHeaderComponent,
    AyFooterComponent
  ]
})
export class AyLeftHeadFootModule { }
