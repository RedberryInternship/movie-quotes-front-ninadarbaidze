import * as Yup from 'yup';

const movieSchema = Yup.object({
  movieNameEN: Yup.string()
    .required('home:commonRequired')
    .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
  movieNameGE: Yup.string()
    .required('home:commonRequired')
    .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
  genre: Yup.array().required('home:commonRequired'),
  directorEN: Yup.string()
    .required('home:commonRequired')
    .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
  directorGE: Yup.string()
    .required('home:commonRequired')
    .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
  budget: Yup.string()
    .required('home:commonRequired')
    .matches(/[0-9]+/, 'home:numbers'),
  year: Yup.string()
    .required('home:commonRequired')
    .matches(/[0-9]+/, 'home:numbers'),
  descriptionEN: Yup.string()
    .required('home:commonRequired')
    .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
  descriptionGE: Yup.string()
    .required('home:commonRequired')
    .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
  image: Yup.mixed().required('home:commonRequired'),
});

export default movieSchema;
