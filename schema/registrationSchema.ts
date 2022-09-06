import * as Yup from 'yup';

const registrationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'min 3 characters')
    .max(15, 'max 15 characters')
    .required('Name field is required')
    .matches(/^[a-z0-9]+$/g, 'Enter valid username'),
  email: Yup.string()
    .required('Email field is required')
    .email('Invalid email format'),
  password: Yup.string()
    .lowercase('Values should be lowercase')
    .required('Password field is required')
    .min(8, 'min 8 characters')
    .matches(/^[a-z0-9]+$/g, 'Enter valid password')
    .max(15, 'max 15 characters'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Password don't match")
    .required('Password field is required'),
});

export default registrationSchema;
