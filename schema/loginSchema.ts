import * as Yup from 'yup';

const loginSchema = Yup.object({
  user: Yup.string()
    .required('User field is required')
    .min(3, 'min 3 characters'),
  password: Yup.string()
    .lowercase()
    .required('Password field is required')
    .min(8, 'min 8 characters')
    .matches(/^[a-z0-9]+$/g, 'Enter valid password')
    .max(15, 'max 15 characters'),
});

export default loginSchema;
