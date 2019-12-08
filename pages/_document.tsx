import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MuiServerStyleSheet } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledSheet = new StyledServerStyleSheet();
    const muiSheet = new MuiServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => styledSheet.collectStyles(muiSheet.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledSheet.getStyleElement()}
            {muiSheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      styledSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
