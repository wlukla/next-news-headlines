import { observable, action } from 'mobx';

import { getTopHeadlinesByQuery } from '../services/news-service';
import { ArticleData } from '../types';

class CategoryStore {
  @observable articles = null;

  endpoint = 'query';

  constructor() {
    this.articles = [];
  }

  async fetchHeadlines(query: string) {
    const response = await getTopHeadlinesByQuery(query);
    this.setArticles(response);
  }

  @action setArticles(articles: ArticleData[]) {
    this.articles = articles;
  }
}

export default CategoryStore;
