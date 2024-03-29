import {Component} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
