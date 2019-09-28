import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NYTimesService} from '../../services/nytimes/nytimes.service';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search/search.service';

export interface OptionsGroup {
  group: string;
  options: {
    name: string;
    label: string;
  }[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  headerForm = new FormGroup({
    search: new FormControl(''),
    options: new FormControl('')
  });
  articles: string[];
  optionsGroup: OptionsGroup[] = [];
  @ViewChild('optionSelect', {static: true}) optionSelect;

  constructor(private nyTimesService: NYTimesService,
              private router: Router,
              private searchService: SearchService) {

    // TODO Externalize this options/config
    this.optionsGroup = [
      {
        group: 'Type',
        options: [{
          label: 'Article',
          name: 'Article'
        }, {
          label: 'Audio',
          name: 'Audio'
        }, {
          label: 'Video',
          name: 'Video'
        }
        ]
      },
      {
        group: 'Section',
        options: [
          {
            label: 'Arts',
            name: 'Arts'
          },
          {
            label: 'Business',
            name: 'Business'
          },
          {
            label: 'Opinion',
            name: 'Opinion'
          },
          {
            label: 'World',
            name: 'World'
          }
        ]
      }
    ];
  }

  /**
   * When click search it uses the value in the search input box,
   * and redirects to search page with the respective value.
   */
  async search() {
    const searchValue = this.headerForm.get('search').value;
    await this.searchService.emitSearch(searchValue);
    await this.router.navigate(['/search'], {queryParams: {search: searchValue}});
  }

  changeSelect() {
    this.optionSelect.open();
  }

  select(group: string, option: string) {
    alert('WIP (work in progress)\nGroup: ' + group + ' Option:' + option);
  }


}
