import { verifyEmail } from 'services';

const VerifyEmail = () => {
  return <div></div>;
};

export const getServerSideProps = async (context: {
  query: { token: string };
}) => {
  const token = context.query.token;

  try {
    await verifyEmail({
      token,
    });
    return {
      redirect: {
        destination: `/?modal=email-verified`,
        permanent: false,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: `/?modal=verification-failed`,
        permanent: false,
      },
    };
  }
};

export default VerifyEmail;
