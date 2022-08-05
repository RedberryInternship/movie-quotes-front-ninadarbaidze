import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Popup } from 'components';

const PopupComponent = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const modalState = router.query.modal;

  return (
    <>
      {modalState === 'account-verified' && (
        <Popup
          icon={'/assets/images/check-icon.png'}
          heading={t('home:thanks')}
          paragraph={t('home:thanksText2')}
          buttonTxt={t('home:thanksBtn2')}
          url={'/'}
        />
      )}

      {modalState === 'verification-failed' && (
        <Popup
          icon={'/assets/images/error-icon.png'}
          heading={t('home:failed')}
          paragraph={t('home:failedTxt')}
          buttonTxt={t('home:failedTxtBtn')}
          url={'/'}
        />
      )}
      {modalState === 'email-sent' && (
        <Popup
          icon={'/assets/images/email-sent-icon.png'}
          heading='Thanks!'
          paragraph={t('home:thanksText1')}
          buttonTxt={t('home:thanksBtn1')}
          url={'/'}
        />
      )}

      {modalState === 'password-recovery-email-sent' && (
        <Popup
          icon={'/assets/images/email-sent-icon.png'}
          heading='Check your email'
          paragraph='We have sent a password recover instructions 
          to your email'
          buttonTxt='Go to my email'
          url={'/'}
        />
      )}
    </>
  );
};

export default PopupComponent;
