import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AyLeftHeadFootModule } from './ay-left-head-foot/leftheadfoot.module';

import { AppComponent } from './app.component';

import { AyLayoutComponent } from './ay-layout/ay-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AyLeftHeadFootModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AyLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
