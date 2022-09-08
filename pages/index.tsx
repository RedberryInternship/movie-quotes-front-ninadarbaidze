import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Header,
  Footer,
  ParallaxQuote,
  Button,
  SignUp,
  PopupComponent,
  Login,
  ForgotPassword,
  UpdatePassword,
} from 'components';
import { useMain } from 'hooks';

const Home: NextPage = () => {
  const { t, ctx, currLang, startButtonHandler } = useMain();

  return (
    <>
      <Head>
        <title>
          {currLang === 'en'
            ? 'Movie Quotes - Find any quote'
            : 'Movie Quotes - იპოვე ნებისმიერი ციტატა'}
        </title>
        <meta
          name='description'
          content={
            currLang === 'en'
              ? 'Find any quote in millions of movie lines'
              : 'იპოვე ნებისმიერი ციტატა მილიონობით ფილმის სტრიქონში'
          }
        />
      </Head>
      <Header />
      {ctx.registrationModalState && <SignUp />}
      {ctx.loginModalState && <Login />}
      {ctx.passwordRecoveryState && <ForgotPassword />}
      {ctx.passwordUpdateState && <UpdatePassword />}
      <PopupComponent />

      <div className='flex flex-col gap-12  lg:h-[80vh] w-screen pb-44 items-center text-center bg-mainDark'>
        <h1
          className={`${
            currLang === 'ge'
              ? 'font-helvetica_ge font-bold'
              : 'font-bold font-Montserrat '
          } text-beidge pt-[40%] sm:pt-[20%] lg:pt-[10%] text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl max-w-[70%] lg:max-w-[40%]`}
        >
          {t('home:MainH1')}
        </h1>
        <Button
          text={t('home:start')}
          className='bg-red hover:bg-redHover font-normal px-10 py-[12px] text-[20px] 2xl:px-14 2xl:py-4 2xl:text-lg'
          onClick={() => startButtonHandler()}
        />
      </div>
      <div className='bg-homeGradient'>
        <ParallaxQuote
          imagePath={'/assets/images/image-1.png'}
          quote={`"${t('home:quote1Qt')}"`}
          film={`${t('home:quote1P')}`}
        />
        <ParallaxQuote
          imagePath={'/assets/images/image-2.png'}
          quote={`"${t('home:quote2Qt')}"`}
          film={`${t('home:quote2P')}`}
        />
        <ParallaxQuote
          imagePath={'/assets/images/image-3.png'}
          quote={`"${t('home:quote3Qt')}"`}
          film={`${t('home:quote3P')}`}
        />
      </div>
      <Footer />
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
