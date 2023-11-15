import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document.default {
  static async getInitialProps(ctx) {
    const initialProps = await Document.default.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
