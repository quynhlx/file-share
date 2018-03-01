import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class HomeGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if (username && password) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
