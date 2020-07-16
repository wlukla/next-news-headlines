import { useStaticRendering } from 'mobx-react';

import CategoryStore from './category-store';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

const initializeStore = () => {
  if (isServer) {
    return {
      categoryStore: new CategoryStore(),
    };
  }
  if (store === null) {
    store = {
      categoryStore: new CategoryStore(),
    };
  }

  return store;
};

export default initializeStore;
