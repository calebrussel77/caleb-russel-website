/* eslint-disable @typescript-eslint/ban-types */
import '@styles/globals.css';
import type {NextPage} from 'next';
import {DefaultSeo} from 'next-seo';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import type {ReactElement, ReactNode} from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <DefaultSeo
        defaultTitle="Caleb Russel - Développeur Frontend"
        titleTemplate="%s | Caleb Russel - Développeur Frontend"
        languageAlternates={[
          {href: 'https://www.calebrussel.com/', hrefLang: 'en'},
          {href: 'https://www.calebrussel.com/fr', hrefLang: 'fr'},
        ]}
        description="Développeur amoureux du beaux et des bonnes pratiques d’ingénierie logicielle, qui de manière passionnée et enthousiaste, aime donner vie aux idées à travers du code."
        openGraph={{
          type: 'website',
          locale: 'en_En',
          url: 'https://www.calebrussel.dev/',
          images: [
            {
              url: 'https://res.cloudinary.com/lerussecaleb/image/upload/v1647013627/caleb-russel-preview_kunkth.png',
              width: 500,
              height: 500,
              alt: 'Caleb russel preview',
              type: 'image/png',
            },
          ],
          site_name: 'Caleb russel',
        }}
        twitter={{
          handle: '@calebelat',
          site: '@calebelat',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="caleb russel" />
        <meta name="apple-mobile-web-app-title" content="caleb russel" />
        <meta name="theme-color" content="#ffff" />
        <meta name="msapplication-navbutton-color" content="#ffff" />
        <meta name="author" content="Caleb Russel" />
        <meta
          name="keywords"
          content="Caleb Russel Elat, web, website, Figma, UI Designer, application, SaaS, developer, software, Front-end, JavaScript, React.js, Tailwind CSS, freelancer"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
