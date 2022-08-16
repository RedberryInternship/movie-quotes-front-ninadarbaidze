import { Field, Form, Formik, FormikProps } from 'formik';
import {
  SelectInput,
  MovieInput,
  MovieTextArea,
  Button,
  ImageInput,
  ImageEditInput,
} from 'components';
import { movieSchema } from 'schema';
import { useMovieForm } from './useMovieForm';
import { FormValues } from './types';

const MovieForm = () => {
  const { genres, onSubmit, t, defaultValues, movieCtx } = useMovieForm();

  const renderForm = ({ errors }: FormikProps<FormValues>) => (
    <Form className='flex flex-col gap-5 h-[80vh] overflow-scroll'>
      {errors.movieNameEN ||
      errors.movieNameGE ||
      errors.genre ||
      errors.directorEN ||
      errors.directorGE ||
      errors.budget ||
      errors.descriptionEN ||
      errors.descriptionGE ||
      errors.image ? (
        <div className='text-red text-sm absolute top-[11%] right-[5%] '>
          {t('movies:required')}
        </div>
      ) : null}
      <Field
        name='movieNameEN'
        options={genres}
        component={MovieInput}
        placeholder='Movie name'
        isMulti={true}
        lang={'Eng'}
      />

      <Field
        name='movieNameGE'
        options={genres}
        component={MovieInput}
        placeholder='ფილმის სახელი'
        isMulti={true}
      />
      <Field
        name='genre'
        options={genres}
        component={SelectInput}
        placeholder={t('movies:genre')}
        isMulti={true}
      />
      <Field
        name='directorEN'
        options={genres}
        component={MovieInput}
        placeholder='Director'
        isMulti={true}
        lang={'Eng'}
      />
      <Field
        name='directorGE'
        options={genres}
        component={MovieInput}
        placeholder='რეჟისორი'
        isMulti={true}
      />
      <Field
        name='budget'
        options={genres}
        component={MovieInput}
        placeholder={t('movies:budget')}
        type='number'
        isMulti={true}
        className='appearance-none'
      />
      <Field
        name='year'
        options={genres}
        component={MovieInput}
        placeholder={t('movies:year')}
        type='number'
        isMulti={true}
        className='appearance-none'
      />
      <Field
        name='descriptionEN'
        options={genres}
        component={MovieTextArea}
        placeholder='Movie discription'
        isMulti={true}
        lang={'Eng'}
      />
      <Field
        name='descriptionGE'
        options={genres}
        component={MovieTextArea}
        placeholder='ფილმის აღწერა'
        isMulti={true}
        lang={'ქარ'}
      />

      <Field
        type='file'
        name='image'
        accept='image/*'
        component={movieCtx.isMovieEdited ? ImageEditInput : ImageInput}
      />

      <Button
        text={
          movieCtx.isMovieEdited ? t('movies:updateMovie') : t('movies:addbtn')
        }
        className='bg-red mt-2 mb-10 w-[100%]'
      />
    </Form>
  );

  return (
    <Formik
      initialValues={defaultValues}
      render={renderForm}
      onSubmit={onSubmit}
      validationSchema={movieSchema}
    />
  );
};

export default MovieForm;
