import { InjectionToken, NgModule } from '@angular/core';
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
import { CarouselDirective } from './session16/carousel.directive';
import { Session17Component } from './session17/session17.component';
import { UserComponent } from './session17/user/user.component';
import { UsersComponent } from './session17/users/users.component';
import { Session18Component } from './session18/session18.component';
import { User1Component } from './session18/user1/user1.component';
import { Users1Component } from './session18/users1/users1.component';
import { MyCompanyService } from './session18/my-company.service';
import { Session19Component } from './session19/session19.component';
import { Session20Component } from './session20/session20.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Session21Component } from './session21/session21.component';
import { User21Component } from './session21/user21/user21.component';
import { EditUser21Component } from './session21/edit-user21/edit-user21.component';
import { Session22Component } from './session22/session22.component';
import { AboutComponent } from './session22/about/about.component';
import { AdminComponent } from './session22/admin/admin.component';
import { IndexHomeComponent } from './session22/index-home/index-home.component';
import { VirtualKeyboardComponent } from './virtual-keyboard/virtual-keyboard.component';
import { AuthService } from './session22/auth.service';
import { Session23Component } from './session23/session23.component';
import { Home23Component } from './session23/home23/home23.component';
import { Session24Component } from './session24/session24.component';
import { RegisterComponent } from './session24/register/register.component';
import { Home24Component } from './session24/home24/home24.component';
import { Session25Component } from './session25/session25.component';
import { AlbumDetailsComponent } from './session25/album-details/album-details.component';
import { AlbumsComponent } from './session25/albums/albums.component';
import { Home25Component } from './session25/home25/home25.component';
import { Session26Component } from './session26/session26.component';
import { LimitedAccessComponent } from './limited-access/limited-access.component';
import { Home26Component } from './session26/home26/home26.component';
import { Product26Component } from './session26/product26/product26.component';
import { LoginComponent } from './session26/login/login.component';


export function myCompanyServiceProvider(): MyCompanyService{
return new MyCompanyService()
} 
export const MYCOMPANY_SERVICE_TOKEN = new InjectionToken<MyCompanyService>('MYCOMPANY_SERVICE_TOKEN');

export const USER_AGENT=new InjectionToken<string>('USER_AGENT');
export const SCREEN_WIDTH=new InjectionToken<string>('SCREEN_WIDTH');
export const SCREEN_HEIGHT=new InjectionToken<string>('SCREEN_HEIGHT');

export const DEVICE_NAME_TOKEN = new InjectionToken<string>('DEVICE_NAME_TOKEN');

export function deviceNameProvider(userAgent:string, screenwidth:string, screenHeight:string): string{
  //logic goes here
 return userAgent+'-*-'+screenwidth+'-*-'+screenHeight;
}

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
    AppHighlightDirective,
    CarouselDirective,
    Session17Component,
    UserComponent,
    UsersComponent,
    Session18Component,
    User1Component,
    Users1Component,
    Session19Component,
    Session20Component,
    NotfoundComponent,
    Session21Component,
    User21Component,
    EditUser21Component,
    Session22Component,
    AboutComponent,
    AdminComponent,
    IndexHomeComponent,
    VirtualKeyboardComponent,
    Session23Component,
    Home23Component,
    Session24Component,
    RegisterComponent,
    Home24Component,
    Session25Component,
    AlbumDetailsComponent,
    AlbumsComponent,
    Home25Component,
    Session26Component,
    LimitedAccessComponent,
    Home26Component,
    Product26Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {provide:MYCOMPANY_SERVICE_TOKEN, useFactory:myCompanyServiceProvider},
    // {provide:MYCOMPANY_SERVICE_TOKEN, useClass:MyCompanyService},
    // {provide: USER_AGENT, useValue: window.navigator.userAgent},
    // {provide: SCREEN_WIDTH, useValue: window.screen.width},
    // {provide: SCREEN_HEIGHT, useValue: window.screen.height},
    // {
    //   provide: DEVICE_NAME_TOKEN,
    //   useFactory: deviceNameProvider,
    //   deps:[
    //   USER_AGENT,
    //   SCREEN_WIDTH,
    //   SCREEN_HEIGHT
    //  ]
    // },
  //  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
