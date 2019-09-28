import {Component, Input, ViewEncapsulation} from '@angular/core';
import {SearchNew} from '../../model/News';
import {DetailViewComponent} from '../../modals/detail-view/detail-view.component';
import {NYTimesService} from '../../services/nytimes/nytimes.service';
import {MatBottomSheet} from '@angular/material';

@Component({
  selector: 'app-new-search-preview',
  templateUrl: './new-search-preview.component.html',
  styleUrls: ['./new-search-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewSearchPreviewComponent {

  @Input() new: SearchNew;

  constructor(private nyTimesService: NYTimesService,
              private bottomSheet: MatBottomSheet) {
  }

  /**
   * Open the details of the active new.
   * In this case, the new selected on the search page
   */
  showDetail() {
    this.nyTimesService.activeNew = this.new;
    this.bottomSheet.open(DetailViewComponent);
  }

}
