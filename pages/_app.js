import Head from 'next/head';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quiz</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Friends" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://quiz-git-main.kitkoshino.vercel.app/"
        />
        <meta property="og:title" content="Friends" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://quiz-git-main.kitkoshino.vercel.app/"
        />
        <meta property="twitter:title" content="Friends" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
