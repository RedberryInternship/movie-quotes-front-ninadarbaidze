import * as Yup from 'yup';

const loginSchema = Yup.object({
  username: Yup.string().min(3, 'min 3 characters'),
  email: Yup.string().email('Invalid email format'),
});

export default loginSchema;
