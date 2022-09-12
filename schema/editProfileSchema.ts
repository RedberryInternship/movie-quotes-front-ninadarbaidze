import * as Yup from 'yup';

const editProfileSchema = Yup.object({
  username: Yup.string().min(3, 'home:min3').required('home:commonRequired'),
  email: Yup.string().email('home:invalidEmail'),
  newPassword: Yup.string()
    .min(8, 'home:min8')
    .matches(/^[a-z0-9]+$/g, 'home:validPass')
    .max(15, 'home:max15'),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'home:passwordDontMatch'
  ),
});

export default editProfileSchema;
