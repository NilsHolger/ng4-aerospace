import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'we honor angular && open source.';
  constructor(private authenticationService: AuthenticationService,
              private router: Router, private userService: UserService) {
      authenticationService.user$.subscribe(user => {
        if (!user) { return; }
        userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) { return; }
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      });
    }
}
