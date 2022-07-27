import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const { locales } = useRouter();

  return (
    <div className={styles.container}>
      <nav>
        {locales!.map((loc) => (
          <li key={loc}>
            <Link href={'/'} locale={loc}>
              <a>{loc}</a>
            </Link>
          </li>
        ))}
      </nav>
      <h1>{t('home:welcome_msg')}</h1>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['home'])),
    },
  };
};
