import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  AuthContextProvider,
  UserContextProvider,
  MovieContextProvider,
  QuoteContextProvider,
} from 'store';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { locale } = useRouter();
  return (
    <SessionProvider session={session}>
      <AuthContextProvider>
        <UserContextProvider>
          <MovieContextProvider>
            <QuoteContextProvider>
              <div
                className={
                  locale === 'en'
                    ? 'font-helvetica_en overflow-x-clip'
                    : 'font-helvetica_ge overflow-x-clip'
                }
              >
                <Component {...pageProps} />
              </div>
            </QuoteContextProvider>
          </MovieContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
