import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const CustomDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Serhii Hovorovksyi" />
        <meta name="description" content="Serhii Hovorovskyi's website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
