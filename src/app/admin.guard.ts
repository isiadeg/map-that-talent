import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
constructor(private loginservice:LoginService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isloggedin()){
      this.loginservice.url = state.url;
      return true;
    }else{
     
      this.loginservice.url = state.url;
      
      return false;
    }

  }

  isloggedin(){
    if(this.loginservice.isloggedin()){
        return true;
    }else{
      this.router.navigate(["/login"]);
      return false;
    }
  }
  
}
