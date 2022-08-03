import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email field is required')
    .email('Invalid email format'),
  password: Yup.string()
    .lowercase()
    .required('Password field is required')
    .min(8, 'min 8 characters')
    .matches(/^[a-z0-9]+$/g, 'Enter valid password')
    .max(15, 'max 15 characters'),
});

export default loginSchema;
