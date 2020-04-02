// This file isn't created by vs code method, insted you have to do this code below on terminal:
// cd DatingApp-SPA/src/app/_guards/ <-- this folder you created on a hand.
// ng g guard auth --skipTests
// select CanActivate.


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    // you could direct to a page here.
    this.alertify.error('You shall not pass!!!!');
    this.router.navigate(['/home']);

    return false;

  }
}


