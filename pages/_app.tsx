import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { AuthContextProvider } from 'store';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { locale } = useRouter();
  return (
    <SessionProvider session={session}>
      <AuthContextProvider>
        <div
          className={
            locale === 'en' ? 'font-helvetica_en' : 'font-helvetica_ge'
          }
        >
          <Component {...pageProps} />
        </div>
      </AuthContextProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
