import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Header } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <div className='h-screen w-screen bg-homeGradient'>
        <Header />
      </div>
    </>
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
