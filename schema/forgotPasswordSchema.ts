import * as Yup from 'yup';

const forgotPassword = Yup.object({
  email: Yup.string()
    .required('Email field is required')
    .email('Invalid email format'),
});

export default forgotPassword;
