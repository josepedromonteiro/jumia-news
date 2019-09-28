import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NYTimesService} from '../../services/nytimes/nytimes.service';
import {SearchService} from '../../services/search/search.service';
import {Subscription} from 'rxjs';
import {SearchNew} from '../../model/News';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchPageComponent implements OnInit, OnDestroy {

  onSearchSubscriber: Subscription;
  lottieConfigLoading;
  lottieConfigNotFound;
  notFound = false;
  loading = false;
  searchTerm = '';
  searchNews: SearchNew[];

  constructor(private route: ActivatedRoute,
              private nyTimesService: NYTimesService,
              private searchService: SearchService) {

    this.lottieConfigNotFound = {
      path: 'assets/lottie/not_found.json',
      autoplay: true,
      loop: true
    };

    this.lottieConfigLoading = {
      path: 'assets/lottie/loading.json',
      autoplay: true,
      loop: true
    };

    /**
     * When tha search button is clicked, it emits the following event
     */
    this.onSearchSubscriber = this.searchService.searchSubscription().subscribe(async (query: string) => {
      await this.doSearch(query);
    });

  }

  async ngOnInit() {
    await this.route.queryParams.subscribe(async (params) => {
      if (!params) {
        return;
      }

      if (!params.search === (null || undefined)) {
        return;
      }

      await this.doSearch(params.search);
    });
  }

  ngOnDestroy() {
    if (this.onSearchSubscriber) {
      this.onSearchSubscriber.unsubscribe();
    }
  }

  /**
   * Handles the search of a query
   * @param query - value to search
   */
  private async doSearch(query: string) {
    this.notFound = false;
    this.loading = true;
    this.searchNews = [];
    this.searchTerm = query;
    this.searchNews = await this.nyTimesService.articleSearch(query);
    this.loading = false;
    if (this.searchNews.length === 0) {
      this.notFound = true;
    }
  }

}
