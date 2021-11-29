import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LimitedAccessComponent } from './limited-access/limited-access.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
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
import { Session22Component } from './session22/session22.component';
import { Auth23Guard } from './session23/auth23.guard';
import { Home23Component } from './session23/home23/home23.component';
import { Session23Component } from './session23/session23.component';
import { DeactivateGuard } from './session24/deactivate.guard';
import { Home24Component } from './session24/home24/home24.component';
import { RegisterComponent } from './session24/register/register.component';
import { Session24Component } from './session24/session24.component';
import { AlbumDetailsComponent } from './session25/album-details/album-details.component';
import { AlbumsComponent } from './session25/albums/albums.component';
import { Home25Component } from './session25/home25/home25.component';
import { ResolveGuard } from './session25/resolve.guard';
import { Session25Component } from './session25/session25.component';
import { Auth26Guard } from './session26/auth.guard';
import { CheckCredentialsGuard } from './session26/check-credentials.guard';
import { Home26Component } from './session26/home26/home26.component';
import { LimitedAccessGuard } from './session26/limited-access.guard';
import { Product26Component } from './session26/product26/product26.component';
import { Session26Component } from './session26/session26.component';
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
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]}
]},

{path: 'session23', component: Session23Component, canActivateChild:[Auth23Guard], children:[
  {path: 'home23', component: Home23Component},
]},

{path: 'session24', component: Session24Component, children:[
  {path: 'Home24', component: Home24Component},
  {path: 'register', component: RegisterComponent, canDeactivate:[DeactivateGuard]},
]},

{path: 'session25', component: Session25Component, children:[
  {path: 'home25', component: Home25Component},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumDetailsComponent, 
   data:{ message: 'this album is heavy' },
   resolve:{ album: ResolveGuard }
  },
]},

{path: 'session26', component: Session26Component, children:[
  {path: 'home26', component: Home26Component},
  // {path: 'product26', component: Product26Component, canActivate:[Auth26Guard,CheckCredentialsGuard,LimitedAccessGuard]},
  //{path: 'product26', component: Product26Component, canActivate:[Auth26Guard,LimitedAccessGuard,CheckCredentialsGuard]},
  {path: 'product26', component: Product26Component, canActivate:[Auth26Guard], data:{roles:['admin']}},
  {path: 'editProduct26', component: Product26Component, canActivate:[Auth26Guard],data:{roles:['users']}},
]},

{path: 'virtualKeyboard', component: VirtualKeyboardComponent},
{path: 'notAuthorized', component: NotAuthorizedComponent},
{path: 'limitedAccess', component: LimitedAccessComponent},

{path: 'notfound', component: NotfoundComponent},
{path: '**', redirectTo:"notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
