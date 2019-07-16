import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptureDataComponent } from './capture-data/capture-data.component';
import { CaptureDataService } from './capture-data/capture-data.service';
import { HttpModule } from '@angular/http';
import { AyHeaderComponent } from './ay-header/ay-header.component';
import { AyFooterComponent } from './ay-footer/ay-footer.component';
import { AyLeftnavComponent } from './ay-leftnav/ay-leftnav.component';
import { AyRightnavComponent } from './ay-rightnav/ay-rightnav.component';
import { AyBodyComponent } from './ay-body/ay-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptureDataComponent,
    AyHeaderComponent,
    AyFooterComponent,
    AyLeftnavComponent,
    AyRightnavComponent,
    AyBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CaptureDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
