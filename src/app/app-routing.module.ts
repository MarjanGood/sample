import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './session12/home/home/home.component';
import { UsersComponent } from './session17/users/users.component';
import { Session19Component } from './session19/session19.component';
import { Session20Component } from './session20/session20.component';
import { EditUser21Component } from './session21/edit-user21/edit-user21.component';
import { Session21Component } from './session21/session21.component';
import { User21Component } from './session21/user21/user21.component';
import { AboutComponent } from './session22/about/about.component';
import { AdminComponent } from './session22/admin/admin.component';
import { AuthGuard } from './session22/auth.guard';
import { IndexHomeComponent } from './session22/index-home/index-home.component';
import { NotAuthorizedComponent } from './session22/not-authorized/not-authorized.component';
import { Session22Component } from './session22/session22.component';
import { VirtualKeyboardComponent } from './virtual-keyboard/virtual-keyboard.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'users', component:UsersComponent},
{path: 'session19', component: Session19Component},
{path: 'session20/:id', component: Session20Component},
{path: 'session21', component: Session21Component},
{path: 'user21/:id', component: User21Component, children:[
  {path: 'edit', component: EditUser21Component},
]},
{path: 'session22', component: Session22Component, children:[
  {path: 'home', component: IndexHomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
  {path: 'notAuthorized', component: NotAuthorizedComponent},
]},

{path: 'virtualKeyboard', component: VirtualKeyboardComponent},
{path: 'notFound', component: NotfoundComponent},
{path: '**', redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
