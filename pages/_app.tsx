import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { MovieQuotesContextProvider } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <MovieQuotesContextProvider>
      <div
        className={locale === 'en' ? 'font-helvetica_en' : 'font-helvetica_ge'}
      >
        <Component {...pageProps} />
      </div>
    </MovieQuotesContextProvider>
  );
}

export default appWithTranslation(MyApp);
