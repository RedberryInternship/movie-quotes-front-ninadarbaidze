import * as Yup from 'yup';

const registrationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'home:min3')
    .max(15, 'home:max15')
    .required('home:usernameRequired')
    .matches(/^[a-z0-9]+$/g, 'home:validUsername'),
  email: Yup.string().required('home:emailRequired').email('home:invalidEmail'),
  password: Yup.string()
    .lowercase('home:lowercase')
    .required('home:passRequired')
    .min(8, 'home:min8')
    .matches(/^[a-z0-9]+$/g, 'home:validPass')
    .max(15, 'home:max15'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'home:passwordDontMatch')
    .required('home:passRequired'),
});

export default registrationSchema;
