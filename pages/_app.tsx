import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <div
      className={locale === 'en' ? 'font-helvetica_en' : 'font-helvetica_ge'}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);
