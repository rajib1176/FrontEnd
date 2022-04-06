import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router: Router) { }
 
  canActivate(): boolean {
    console.log("In CanActive");
    if(false){
      this.router.navigate(['login'])
      return false;
    }
    return true;
    
  }
}
