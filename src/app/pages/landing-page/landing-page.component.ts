import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NYTimesService} from '../../services/nytimes/nytimes.service';
import {SearchNew} from '../../model/News';
import {NgxMasonryOptions} from 'ngx-masonry';
import {WebUtils} from '../../utils/Utils';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  news: SearchNew[] = [];
  loading = true;

  public gridOptions: NgxMasonryOptions = {
    transitionDuration: '1.2s',
    fitWidth: true
  };

  public gridOptionsMock: NgxMasonryOptions = {
    transitionDuration: '0',
    fitWidth: true
  };

  constructor(private nyTimesService: NYTimesService) {
  }

  async ngOnInit() {
    this.news = await this.nyTimesService.getLatestNews(0);
    this.loading = false;
  }

  /**
   * Triggered when the page (pagination) changes
   * @param event - includes a pageIndex property, that returns the page index
   */
  async onPage(event) {
    const pageIndex = event.pageIndex;
    this.news = [];
    this.loading = true;
    this.news = await this.nyTimesService.getLatestNews(pageIndex);
    this.loading = false;
  }

  /**
   * Go to the API author page, as specified in https://developer.nytimes.com/branding
   */
  goToLink() {
    WebUtils.goToLink('https://developer.nytimes.com');
  }

}
