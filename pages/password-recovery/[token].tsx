const PasswordRecovery = () => {
  return <div></div>;
};

export const getServerSideProps = async (context: {
  query: { token: any };
}) => {
  const token = context.query.token;

  try {
    return {
      redirect: {
        destination: `/?token=${token}`,
        permanent: false,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: `/?modal=password-recovery-failed`,
        permanent: false,
      },
    };
  }
};

export default PasswordRecovery;
