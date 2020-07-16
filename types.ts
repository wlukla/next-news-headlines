import { NextPageContext } from 'next';

import CategoryStore from './stores/category-store';

export interface ArticleData {
  source: {
    id: string | null;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface MyPageContext extends NextPageContext {
  mobxStore: {
    categoryStore: CategoryStore;
  };
}
