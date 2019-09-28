import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NYTimesService} from '../../services/nytimes/nytimes.service';
import {SearchNew} from '../../model/News';
import {api} from '../../../environments/environment';
import {MatBottomSheetRef} from '@angular/material';
import {WebUtils} from '../../utils/Utils';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailViewComponent implements OnInit {


  @Input() url;
  activeNew: SearchNew;
  image = '';

  constructor(private nyTimesService: NYTimesService,
              private bottomSheetRef: MatBottomSheetRef<DetailViewComponent>) {
  }

  ngOnInit() {
    this.activeNew = this.nyTimesService.activeNew;

    let imageUrl = '';
    if (!this.activeNew.multimedia) {
      return;
    }

    if (this.activeNew.multimedia.length === 0) {
      return;
    }

    /**
     * TODO Create a method in Utils to handle this, since we got the same behaviour in the new-preview component
     * Usually the picture 32 uses a nice resolution,
     * however sometime this picture does not exist so we must use the first one (default)
     */
    if (this.activeNew.multimedia[32]) {
      imageUrl = this.activeNew.multimedia[32].url;
    } else {
      imageUrl = this.activeNew.multimedia[0].url;
    }
    this.image = api.nytimesResources.baseUrl + imageUrl;
  }


  dismiss() {
    this.bottomSheetRef.dismiss();
  }

  /**
   * Open the active new in the New York Times page
   */
  goToLink() {
    WebUtils.goToLink(this.activeNew.redirect);
  }

}
