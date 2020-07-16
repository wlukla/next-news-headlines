import { useStaticRendering } from 'mobx-react';

import CategoryStore from './category-store';
import SearchQueryStore from './search-query-store';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

const initializeStore = () => {
  if (isServer) {
    return {
      categoryStore: new CategoryStore(),
      searchQueryStore: new SearchQueryStore(),
    };
  }
  if (store === null) {
    store = {
      categoryStore: new CategoryStore(),
      searchQueryStore: new SearchQueryStore(),
    };
  }

  return store;
};

export default initializeStore;
