import * as Yup from 'yup';

const updatePasswordSchema = Yup.object({
  password: Yup.string()
    .lowercase()
    .required('Password field is required')
    .min(8, 'min 8 characters')
    .matches(/^[a-z0-9]+$/g, 'Enter valid password')
    .max(15, 'max 15 characters'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Password don't match")
    .required('Password field is required'),
});

export default updatePasswordSchema;
