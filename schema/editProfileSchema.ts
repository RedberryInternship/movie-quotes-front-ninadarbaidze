import * as Yup from 'yup';

const editProfileSchema = Yup.object({
  username: Yup.string()
    .min(3, 'min 3 characters')
    .required('This field is required'),
  email: Yup.string().email('Invalid email format'),
  newPassword: Yup.string()
    .min(8, 'min 8 characters')
    .matches(/^[a-z0-9]+$/g, 'Enter valid password')
    .max(15, 'max 15 characters'),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    "Password don't match"
  ),
});

export default editProfileSchema;
