import * as Yup from 'yup';

const updatePasswordSchema = Yup.object({
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

export default updatePasswordSchema;
