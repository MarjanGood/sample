import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth26Guard implements CanActivate {
  constructor(private router: Router){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree |any {

    
      //if(localStorage.getItem('user') | roles.indexOf(user.role) <= -1){}
      let roles = route.data['roles'] as string[];
      let returnUrl = state.url;

     
      return this.router.createUrlTree(['/notAuthorized'],{
            queryParams:{
                returnUrl: returnUrl
              }
      });
   
  }
  
}
