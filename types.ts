import { NextPageContext } from 'next';

import CategoryStore from './stores/category-store';
import SearchQueryStore from './stores/search-query-store';

export interface ArticleData {
  source: {
    id: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

export interface MyPageContext extends NextPageContext {
  mobxStore: {
    categoryStore: CategoryStore;
    searchQueryStore: SearchQueryStore;
  };
}
