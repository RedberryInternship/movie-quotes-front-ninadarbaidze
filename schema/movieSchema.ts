import * as Yup from 'yup';

const movieSchema = Yup.object({
  movieNameEN: Yup.string().required('movieName field is required'),
  movieNameGE: Yup.string().required('movieName field is required'),
  genre: Yup.array().required('genre field is required'),
  directorEN: Yup.string().required('director field is required'),
  directorGE: Yup.string().required('director field is required'),
  budget: Yup.number().required('budget field is required'),
  year: Yup.number().required('date field is required'),
  descriptionEN: Yup.string().required('description field is required'),
  descriptionGE: Yup.string().required('description field is required'),
  image: Yup.mixed().required('image field is required'),
});

export default movieSchema;
