export const environment = {
  production: true
};

export const keys = {
  nytimesKey: 'IvhQAFMzllOVhuieLKqSJUUAFwGKCUPZ'
};

export const api = {
  nytimesBaseUrl: 'https://api.nytimes.com',
  nytimesNewswire: {
    endpoint: '/svc/news/v3/content',
    all: '/all/all.json',
  },
  nytimesSearch: {
    endpoint: '/svc/search/v2',
    articleSearch: '/articlesearch.json',
    filter: 'fq=',
    sort: 'sort=',
    page: 'page=',
    search: 'q='
  },
  nytimesResources: {
    baseUrl: 'https://www.nytimes.com/'
  }
};
