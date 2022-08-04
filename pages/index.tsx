import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import {
  Header,
  Footer,
  ParallaxQuote,
  Button,
  SignUp,
  PopupComponent,
  Login,
} from 'components';
import { useContext } from 'react';
import { AuthContext } from 'store';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);

  return (
    <>
      <Header />
      {ctx.registrationModalState && <SignUp />}
      {ctx.loginModalState && <Login />}
      <PopupComponent />

      <div className='flex flex-col gap-12  lg:h-[80vh] w-screen pb-44 items-center text-center bg-mainDark'>
        <h1 className='text-beidge pt-[40%] sm:pt-[20%] lg:pt-[10%] text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl font-bold font-Montserrat max-w-[70%] lg:max-w-[40%]'>
          Find any quote in millions of movie lines
        </h1>
        <Button
          text={t('home:start')}
          className='bg-red hover:bg-redHover font-normal px-10 py-[12px] text-[20px] 2xl:px-14 2xl:py-4 2xl:text-lg'
        />
      </div>
      <div className='bg-homeGradient'>
        <ParallaxQuote
          imagePath={'/assets/images/image-1.png'}
          quote={'"You have to leave something behind to go forward"'}
          film={'Interstellar, 2014'}
        />
        <ParallaxQuote
          imagePath={'/assets/images/image-2.png'}
          quote={
            '"I think we’re just gonna have to be secretly in love with each other and leave it that"'
          }
          film={'The Royal Tenenbaums,2001'}
        />
        <ParallaxQuote
          imagePath={'/assets/images/image-3.png'}
          quote={
            '"I think we’re just gonna have to be secretly in love with earch other and leave it that"'
          }
          film={'The Royal Tenenbaums,2001 '}
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
