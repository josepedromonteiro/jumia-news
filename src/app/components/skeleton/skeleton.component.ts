import {Component, Input} from '@angular/core';

/**
 * A simple component that uses ngx-skeleton-loader but adds the functionality to work with dark mode
 */
@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html'
})
export class SkeletonComponent {

  @Input() count: number;
  @Input() appearance: string;

  constructor() {
  }

}
