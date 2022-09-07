import * as Yup from 'yup';

const loginSchema = Yup.object({
  user: Yup.string().required('home:userRequired').min(3, 'home:min3'),
  password: Yup.string()
    .lowercase()
    .required('home:passRequired')
    .min(8, 'home:min8')
    .matches(/^[a-z0-9]+$/g, 'home:validPass')
    .max(15, 'home:max15'),
});
export default loginSchema;
