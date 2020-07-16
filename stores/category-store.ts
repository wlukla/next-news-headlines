import { observable, action } from 'mobx';

import { getTopHeadlinesByCategory } from 'services/news-service';

import { ArticleData } from 'types';

class CategoryStore {
  @observable articles = null;

  endpoint = 'categories';

  constructor() {
    this.articles = [];
  }

  async fetchHeadlines(category: string): Promise<void> {
    const response = await getTopHeadlinesByCategory(category);
    this.setArticles(response);
  }

  @action setArticles(articles: ArticleData[]): void {
    this.articles = articles;
  }
}

export default CategoryStore;
