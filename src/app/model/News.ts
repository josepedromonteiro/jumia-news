/**
 * Model definitions
 */
export interface NYTimesSearchResponse {
  byline: {
    original: string;
  };
  headline: {
    main: string;
  };
  lead_paragraph: string;
  web_url: string;
  multimedia: {
    url: string;
    type: string;
  }[];
  abstract: string;
  pub_date: string;
}

export interface SearchNew {
  byline: string;
  headLine: string;
  main_text: string;
  redirect: string;
  multimedia: {
    url: string;
    type: string;
  }[];
  abstract: string;
  date: string;
}

export class SimpleSearchNew implements SearchNew {
  byline: string;
  headLine: string;
  main_text: string;
  redirect: string;
  multimedia: { url: string; type: string }[];
  abstract: string;
  date: string;

  constructor(nytimesSearchNew?: NYTimesSearchResponse) {
    if (!nytimesSearchNew) {
      this.byline = '';
      this.headLine = '';
      this.main_text = '';
      this.redirect = '';
      this.multimedia = [];
      this.abstract = '';
      this.date = '';
    } else {
      this.byline = nytimesSearchNew.byline.original;
      this.headLine = nytimesSearchNew.headline.main;
      this.main_text = nytimesSearchNew.lead_paragraph;
      this.redirect = nytimesSearchNew.web_url;
      this.multimedia = nytimesSearchNew.multimedia;
      this.abstract = nytimesSearchNew.abstract;
      this.date = nytimesSearchNew.pub_date;
    }
  }
}

