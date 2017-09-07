import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { User } from './models/user';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthenticationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authenticationService.appUser$.map(user => user.isAdmin);
  }

}
