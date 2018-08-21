// @flow
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import App, { Container } from 'next/app';
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
        <Provider store={reduxStore}>
          <ThemedComponent {...pageProps} theme={findTheme('kune-ui-theme-default')} shade="light" />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(KuneApp, initializeStore);
