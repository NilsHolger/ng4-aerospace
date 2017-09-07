import { Component } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styles: [`
  .star {
    position: relative;
    display: inline-block;
    font-size: 3rem;
    color: #d3d3d3;
  }
  .full {
    color: red;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: red;
  }
`],
 providers: [NgbAccordionConfig]
})
export class AnimationsComponent {
  currentRate = 4.242;
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }

}
