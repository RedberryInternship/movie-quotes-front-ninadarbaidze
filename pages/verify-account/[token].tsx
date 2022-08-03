import { verifyAccount } from 'services';

const VerifyAccount = () => {
  return <div></div>;
};

export const getServerSideProps = async (context: {
  query: { token: any };
}) => {
  const token = context.query.token;

  try {
    await verifyAccount({ token });
    return {
      redirect: {
        destination: `/?modal=account-verified`,
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

export default VerifyAccount;
