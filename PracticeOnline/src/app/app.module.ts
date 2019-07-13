import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptureDataComponent } from './capture-data/capture-data.component';
import { CaptureDataService } from './capture-data/capture-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CaptureDataComponent
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
