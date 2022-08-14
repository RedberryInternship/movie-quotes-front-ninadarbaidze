import * as Yup from 'yup';

const movieSchema = Yup.object({
  movieNameEN: Yup.string().required('movieNameEN field is required'),
  movieNameGE: Yup.string().required('movieNameGE field is required'),
  genre: Yup.array().required('genre field is required'),
  directorEN: Yup.string().required('directorEN field is required'),
  directorGE: Yup.string().required('directorGE field is required'),
  budget: Yup.number().required('budget field is required'),
  year: Yup.number().required('date field is required'),
  descriptionEN: Yup.string().required('descriptionEN field is required'),
  descriptionGE: Yup.string().required('descriptionGE field is required'),
  image: Yup.mixed().required('image field is required'),
});

export default movieSchema;
