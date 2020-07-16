/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'mobx-react';

import 'bootstrap/dist/css/bootstrap.min.css';

import initializeStore from '../stores/stores';

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider {...this.mobxStore}>
        <Head>
          <title>News Headlines</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
