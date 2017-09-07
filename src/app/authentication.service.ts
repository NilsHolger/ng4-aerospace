import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as fb from 'firebase';
import { UserService } from './user.service';
import { User } from './models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthenticationService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth,
              private activatedRoute: ActivatedRoute) {
      this.user$ = this.afAuth.authState;
  }

  login() {
    const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new fb.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<User> {
        return this.user$.switchMap(user => {
          if (user) {
            return this.userService.get(user.uid);
          }
          return Observable.of(null);
        });
      }
}
