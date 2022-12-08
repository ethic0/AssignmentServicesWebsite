import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Auth } from "../_services/auth";
@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
    constructor(
        public authService: Auth,
        public router: Router
      ){ }
      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.isLoggedIn !== true) {
          this.router.navigate([''])
        }
        return true;
      }
}