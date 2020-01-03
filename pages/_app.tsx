import App from 'next/app'
import * as React from 'react'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global-styles';
import theme from '../styles/theme';
import store from '../state/store';


export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Provider>
    )
  }
}