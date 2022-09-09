import { Button } from 'components';
import { useError } from 'hooks';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

const Custom403 = () => {
  const { router, t } = useError();
  return (
    <div className='flex flex-col items-center justify-center gap-6 bg-mainDark w-screen h-screen'>
      <div className='w-60'>
        <Image
          src='/assets/images/403-wizard.png'
          alt='404-image'
          width={'500px'}
          height={'500px'}
        />
      </div>
      <h1 className='text-white text-5xl font-bold'>{t('home:403H')}</h1>
      <h2 className='text-white text-xl'>{t('home:403P')}</h2>
      <Button
        text={t('home:errorBtn')}
        onClick={() => router.push('/')}
        className='bg-red hover:bg-redHover'
      />
    </div>
  );
};

export default Custom403;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['home'])),
    },
  };
};
