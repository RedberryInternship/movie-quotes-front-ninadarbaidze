import { Popup } from 'components';
import { usePopupComponent } from './usePopupComponent';

const PopupComponent = () => {
  const { t, modalState } = usePopupComponent();
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

      {modalState === 'email-verified' && (
        <Popup
          icon={'/assets/images/check-icon.png'}
          heading={t('home:verified')}
          paragraph={t('home:verifiedText')}
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
          heading={t('home:thanks')}
          paragraph={t('home:thanksText1')}
          buttonTxt={t('home:thanksBtn1')}
          url={'/'}
        />
      )}
      {modalState === 'password-recovery-email-sent' && (
        <Popup
          icon={'/assets/images/email-sent-icon.png'}
          heading={t('home:forgotPopH1')}
          paragraph={t('home:forgotPopH2')}
          buttonTxt={t('home:forgotPopBtn')}
          optionalParagraph={t('home:forgotPopBack')}
          url={'https://gmail.com'}
        />
      )}

      {modalState === 'password-updated-successfully' && (
        <Popup
          icon={'/assets/images/check-icon.png'}
          heading={t('home:passSuccH1')}
          paragraph={t('home:passSuccH2')}
          buttonTxt={t('home:thanksBtn2')}
          url={'/'}
        />
      )}
      {modalState === 'password-update-failed' && (
        <Popup
          icon={'/assets/images/error-icon.png'}
          heading={t('home:passErrH1')}
          paragraph={t('home:passErrH2')}
          buttonTxt={t('home:PassErrBtn')}
          url={'/'}
        />
      )}
    </>
  );
};

export default PopupComponent;
