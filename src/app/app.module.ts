import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './session12/home/home/home.component';
import { IncComponent } from './session12/inc/inc/inc.component';
import { Session13Component } from './session13/session13.component';
import { Session14Component } from "./session14/session14.component";
import { Session15Component } from './session15/session15.component';
import { Session16Component } from './session16/session16.component';
import { ColorfulDirective } from './session16/colorful.directive';
import { AppHighlightDirective } from './session16/apphighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncComponent,
    Session13Component,
    Session14Component,
    Session15Component,
    Session16Component,
    ColorfulDirective,
    AppHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
