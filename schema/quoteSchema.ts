import * as Yup from 'yup';

const quoteSchema = Yup.object({
  quoteGE: Yup.string()
    .required('home:commonRequired')
    .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
  quoteEN: Yup.string()
    .required('home:commonRequired')
    .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
  image: Yup.string().required('home:commonRequired'),

  movieId: Yup.string().required('home:commonRequired'),
});

export default quoteSchema;
