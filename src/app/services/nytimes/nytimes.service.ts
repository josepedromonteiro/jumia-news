import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUtils} from '../../utils/Utils';
import {api} from '../../../environments/environment';
import {SearchNew, NYTimesSearchResponse, SimpleSearchNew} from '../../model/News';

@Injectable({
  providedIn: 'root'
})
export class NYTimesService {

  public activeNew: SearchNew;

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Returns the latest news in NY Times. . Performs an HTTP request to the NY Times API
   * @param page - index of page (page results) to search, defaults to 0 if it does not exist.
   */
  public async getLatestNews(page: number = 0): Promise<SearchNew[]> {
    const url = ApiUtils.buildUrl(
      api.nytimesSearch.endpoint +
      api.nytimesSearch.articleSearch + '?' +
      api.nytimesSearch.search + '&' +
      api.nytimesSearch.sort + 'newest&' +
      api.nytimesSearch.page + page + '&' +
      api.nytimesSearch.filter + 'type_of_material=Article'
    );

    const result = await this.httpClient.get<any>(url).toPromise();
    const jumiaNews: SearchNew[] = result.response.docs.map((new_: NYTimesSearchResponse) => {
      return new SimpleSearchNew(new_);
    });

    return jumiaNews;
  }

  /**
   * Search an article by query. Performs an HTTP request to the NY Times API
   * @param query - value to search
   */
  public async articleSearch(query: string = ''): Promise<SearchNew[]> {
    const url = ApiUtils.buildUrl(api.nytimesSearch.endpoint + api.nytimesSearch.articleSearch + '?' + api.nytimesSearch.search + query);
    const result = await this.httpClient.get<any>(url).toPromise();

    const filteredNews: SearchNew[] = result.response.docs.map((new_: NYTimesSearchResponse) => {
      return new SimpleSearchNew(new_);
    });

    return filteredNews;
  }
}
