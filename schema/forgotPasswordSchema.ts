import * as Yup from 'yup';

const forgotPasswordSchema = Yup.object({
  email: Yup.string().required('home:emailRequired').email('home:invalidEmail'),
});

export default forgotPasswordSchema;
