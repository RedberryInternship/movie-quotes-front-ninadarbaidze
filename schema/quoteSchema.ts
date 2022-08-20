import * as Yup from 'yup';

const quoteSchema = Yup.object({
  quoteGE: Yup.string()
    .required('This field is required')
    .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
  quoteEN: Yup.string()
    .required('This field is required')
    .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
  image: Yup.string().required('This field is required'),
  movieId: Yup.string().required('This field is required'),
});

export default quoteSchema;
