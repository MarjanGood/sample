// import { Injectable } from '@angular/core';
// import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { AlbumsService } from './albums.service';
// import { album } from './app-interface';
// import { delay, tap } from 'rxjs/internal/operators';

// @Injectable({
//   providedIn: 'root'
// })

// export class ResolveGuard implements Resolve<album> {

//   constructor(private albumService: AlbumsService,
//               private router: Router){}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): album | Observable<album> | Promise<album> {


//     const id = route.paramMap.get('id');
//     if(id != null){
//     let album = this.albumService.albums.find(a=>a.id === +id);
//     if(!album){
//        return of(null).pipe(
//           delay(5000),
//           tap(() => this.router.navigate(['/notfound']))
//        );
//     } else {
//       return of(album).pipe(delay(5000));
//     }
//    }
//   }

// }



import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/internal/operators';
import { AlbumsService } from './albums.service';
import { album } from './app-interface';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<album> {

  constructor(private albumService: AlbumsService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): album | Observable<album> | Promise<album> | Observable<any> {
 
    const id = route.paramMap.get('id');
    let album  = this.albumService.albums.find(album => album.id === Number(id));
  
    if (!album) {

      return of(0).pipe(
        delay(5000),
        tap(() => this.router.navigate(['/notfound']))
      );

    } else {

      return of(album).pipe(delay(5000));

    }
    
  }

}



