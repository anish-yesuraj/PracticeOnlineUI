import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTooltipModule, MatSelectModule,
         MatButtonModule, MatInputModule, MatRippleModule, MatSlideToggleModule,
        MatCheckboxModule } from '@angular/material';

import { AyLayoutRoutes } from './ay-layout.routing';
import { AyHomeComponent } from '../ay-home/ay-home.component';
import { CaptureDataComponent } from '../capture-data/capture-data.component';
import { CaptureDataService } from '../capture-data/capture-data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AyLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  declarations: [
    AyHomeComponent,
    CaptureDataComponent
  ],
  providers: [CaptureDataService]
})

export class AyLayoutModule {}
