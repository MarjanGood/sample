import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './session12/home/home/home.component';
import { IncComponent } from './session12/inc/inc/inc.component';
import { Session13Component } from './session13/session13.component';
import { Session14Component } from "./session14/session14.component";
import { Session15Component } from './session15/session15.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncComponent,
    Session13Component,
    Session14Component,
    Session15Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
