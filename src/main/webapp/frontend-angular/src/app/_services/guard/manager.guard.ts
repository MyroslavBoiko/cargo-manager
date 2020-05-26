import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../token/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {

  constructor(private router: Router, private tokenStorage: TokenStorageService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.tokenStorage.getUser();
    if (user && user.roles.includes('ROLE_MANAGER')) {
      return true;
    } else {
      this.router.navigate(['/'])
        .then(() => false);
    }
  }

}
