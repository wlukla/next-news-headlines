import { observable, action } from 'mobx';

import { getTopHeadlinesByCategory } from '../services/news-service';
import { Article } from '../types';

class CategoryStore {
  @observable articles = null;

  endpoint = 'articles';

  constructor() {
    this.articles = [];
  }

  async fetchHeadlines(category: string) {
    const response = await getTopHeadlinesByCategory(category);
    this.setArticles(response);
  }

  @action setArticles(articles: Article[]) {
    this.articles = articles;
  }
}

export default CategoryStore;
