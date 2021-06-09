import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './session12/home/home/home.component';
import { IncComponent } from './session12/inc/inc/inc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
