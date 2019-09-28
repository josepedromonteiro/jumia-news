import {Component, Input, ViewEncapsulation} from '@angular/core';
import {SearchNew} from '../../model/News';
import {api} from '../../../environments/environment';
import {Router} from '@angular/router';
import {NYTimesService} from '../../services/nytimes/nytimes.service';
import {DetailViewComponent} from '../../modals/detail-view/detail-view.component';
import {MatBottomSheet} from '@angular/material';

@Component({
  selector: 'app-new-preview',
  templateUrl: './new-preview.component.html',
  styleUrls: ['./new-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewPreviewComponent {

  image: string;

  constructor(private router: Router,
              private nyTimesService: NYTimesService,
              private bottomSheet: MatBottomSheet) {
  }

  private _new: SearchNew;

  get new(): SearchNew {
    return this._new;
  }

  @Input('new')
  set new(new_: SearchNew) {
    let imageUrl = '';
    this._new = new_;
    if (!this._new.multimedia) {
      return;
    }
    if (!this._new.multimedia) {
      return;
    }

    if (this._new.multimedia.length === 0) {
      return;
    }

    /**
     * Usually the picture 32 uses a nice resolution,
     * however sometime this picture does not exist so we must use the first one (default)
     */
    if (this._new.multimedia[32]) {
      imageUrl = this._new.multimedia[32].url;
    } else {
      imageUrl = this._new.multimedia[0].url;
    }
    this.image = api.nytimesResources.baseUrl + imageUrl;
  }

  /**
   * Open the details of the active new
   */
  showDetail() {
    this.nyTimesService.activeNew = this.new;
    this.bottomSheet.open(DetailViewComponent);
  }
}
