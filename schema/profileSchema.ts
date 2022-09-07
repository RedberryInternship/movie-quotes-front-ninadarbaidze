import * as Yup from 'yup';

const profileSchema = Yup.object({
  username: Yup.string().min(3, 'home:min3'),
  email: Yup.string().email('home:invalidEmail'),
});

export default profileSchema;
