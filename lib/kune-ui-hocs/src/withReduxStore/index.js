// @flow
import "@babel/polyfill";

import React, { Component } from 'react';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initializeStore: Function, initialState: ?any) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export default (App: any, initializeStore: Function) => {
  return class AppWithRedux extends Component<any> {
    reduxStore: {};

    static async getInitialProps(appContext: any) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore: any = getOrCreateStore(initializeStore);

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(initializeStore),
      };
    }

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(initializeStore, props.initialReduxState);
    }

    render() {
      return (<App {...this.props} reduxStore={this.reduxStore} />);
    }
  }
};
