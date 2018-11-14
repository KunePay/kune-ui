// @flow
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux'

import withReduxStore from 'kune-ui-hocs/withReduxStore';
import themeReducer from 'kune-ui-redux/theme-redux/reducer';
import DefaultTheme from 'kune-ui-theme-default';
import withTheme from 'kune-ui-hocs/withTheme';

const reducers = combineReducers({
  themeReducer,
});

const themes = [DefaultTheme];
const initialThemeState = {
  "name": themes[0].name,
  "theme": themes[0],
  "shade": 'light',
  "direction": 'ltr',
  "inProgress": false,
  "error": null
};

const initializeStore = (initialState: any = {themeReducer: initialThemeState}) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

const findTheme = (name: string) => {
  const filtered = themes.filter((theme) => {return theme.name === name;});
  return (filtered.length === 0)? {} : filtered[0];
}

class KuneApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props;
    const ThemedComponent = withTheme(Component, 'global');

    return (
      <Container>
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Provider store={reduxStore}>
          <ThemedComponent {...pageProps} theme={findTheme('kune-ui-theme-default')} shade="light" />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(KuneApp, initializeStore);
