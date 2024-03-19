// import { CanActivateFn } from '@angular/router';

// export const recipeGuard: CanActivateFn = (route, state) => {
//   if (sessionStorage.getItem('username') === null) {
//     alert("please login!")
//         return false;
//   }
//   return true;
// };

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class recipeGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Your authentication logic to determine if the user is authorized to access the route
    // For example, check if the user is logged in or has necessary permissions
    if (sessionStorage.getItem('username') !== null) {
      return true;
    } else {
      // Redirect to the login page if not authorized
      this.router.navigate(['/login']);
      return false;
    }
  }
}