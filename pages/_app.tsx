import App from 'next/app'
import * as React from 'react'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles';

import GlobalStyles from '../styles/global-styles';
import theme from '../styles/theme';
import store from '../state/store';


export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyles />
              <Component {...pageProps} />
            </>
          </ThemeProvider>
        </StylesProvider>
      </Provider>
    )
  }
}