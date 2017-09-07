import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  imgsPath = ['../../assets/nasa1.jpg', '../../assets/nasa2.jpg', '../../assets/nasa3.jpg'];

  constructor(private config: NgbCarouselConfig) {
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
  }


}
