import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import {
  SelectInput,
  MovieInput,
  MovieTextArea,
  Button,
  ImageInput,
  ImageEditInput,
} from 'components';
import { useMovieSchema } from 'schema';
import { useMovieForm } from './useMovieForm';
import { FormValues } from './types';

const MovieForm = () => {
  const { genres, onSubmit, t, defaultValues, movieCtx } = useMovieForm();
  const { movieSchema } = useMovieSchema();

  const renderForm: React.FC<FormikProps<FormValues>> = () => (
    <Form className='flex flex-col gap-5 h-[80vh] overflow-auto'>
      <Field
        name='movieNameEN'
        component={MovieInput}
        placeholder='Movie name'
        lang={'Eng'}
      />
      <ErrorMessage name='movieNameEN'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>

      <Field
        name='movieNameGE'
        component={MovieInput}
        placeholder='ფილმის სახელი'
      />
      <ErrorMessage name='movieNameGE'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>
      <Field
        name='genre'
        options={genres}
        component={SelectInput}
        placeholder={t('movies:genre')}
        isMulti={true}
      />
      <ErrorMessage name='genre'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>
      <Field
        name='directorEN'
        component={MovieInput}
        placeholder='Director'
        lang={'Eng'}
      />
      <ErrorMessage name='directorEN'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>
      <Field name='directorGE' component={MovieInput} placeholder='რეჟისორი' />
      <ErrorMessage name='directorGE'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>
      <Field
        name='budget'
        component={MovieInput}
        placeholder={t('movies:budget')}
        type='number'
        className='appearance-none'
      />
      <ErrorMessage name='budget'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>
      <Field
        name='year'
        component={MovieInput}
        placeholder={t('movies:year')}
        type='number'
        className='appearance-none'
      />
      <ErrorMessage name='year'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>
      <Field
        name='descriptionEN'
        component={MovieTextArea}
        placeholder='Movie discription'
        lang={'Eng'}
      />
      <ErrorMessage name='descriptionEN'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>
      <Field
        name='descriptionGE'
        component={MovieTextArea}
        placeholder='ფილმის აღწერა'
        lang={'ქარ'}
      />
      <ErrorMessage name='descriptionGE'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>

      <Field
        type='file'
        name='image'
        accept='image/*'
        component={movieCtx.isMovieEdited ? ImageEditInput : ImageInput}
      />
      <ErrorMessage name='image'>
        {(msg) => (
          <div className='mb-[-0.5rem] text-red text-xs pl-3'>{msg}</div>
        )}
      </ErrorMessage>

      <Button
        text={
          movieCtx.isMovieEdited ? t('movies:updateMovie') : t('movies:addbtn')
        }
        className='bg-red mt-2 mb-6 w-[100%]'
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
