import { verifyAccount } from 'services';

const VerifyAccount = () => {
  return <div></div>;
};

export const getServerSideProps = async (context: {
  query: { token: any };
}) => {
  const token = context.query.token;

  try {
    let response = await verifyAccount({ token });
    console.log(response);
    return {
      redirect: {
        destination: '/?modal=account-verified',
        permanent: false,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/?modal=verification-failed',
        permanent: false,
      },
    };
  }
};

export default VerifyAccount;
