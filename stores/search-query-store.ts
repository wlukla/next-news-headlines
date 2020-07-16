import { observable, action } from 'mobx';

import { getTopHeadlinesByQuery } from 'services/news-service';
import { ArticleData } from 'types';

class SearchQueryStore {
  @observable articles = null;

  endpoint = 'query';

  constructor() {
    this.articles = [];
  }

  async fetchHeadlines(query: string): Promise<void> {
    const response = await getTopHeadlinesByQuery(query);
    this.setArticles(response);
  }

  @action setArticles(articles: ArticleData[]): void {
    this.articles = articles;
  }
}

export default SearchQueryStore;
