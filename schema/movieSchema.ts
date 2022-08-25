import * as Yup from 'yup';

const movieSchema = Yup.object({
  movieNameEN: Yup.string()
    .required('This field is required')
    .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
  movieNameGE: Yup.string()
    .required('This field is required')
    .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
  genre: Yup.array().required('This field is required'),
  directorEN: Yup.string()
    .required('This field is required')
    .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
  directorGE: Yup.string()
    .required('This field is required')
    .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
  budget: Yup.string()
    .required('This field is required')
    .matches(/[0-9]+/, 'Enter numbers only'),
  year: Yup.string()
    .required('This field is required')
    .matches(/[0-9]+/, 'Enter numbers only'),
  descriptionEN: Yup.string()
    .required('This field is required')
    .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
  descriptionGE: Yup.string()
    .required('This field is required')
    .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
  image: Yup.mixed().required('This field is required'),
});

export default movieSchema;
