import React from 'react';
import { Field, Form, Formik } from 'formik';
import { SelectInput, MovieInput } from 'components';
import { FormValues } from './types';
import { useMovieForm } from './useMovieForm';

const defaultValues: FormValues = {
  genre: [],
  movieNameEN: '',
  movieNameGE: '',
  directorEN: '',
  directorGE: '',
};

const MovieForm = () => {
  const { genres, onSubmit } = useMovieForm();

  const renderForm = () => (
    <Form>
      <Field
        name='genre'
        options={genres}
        component={SelectInput}
        placeholder='Genre'
        isMulti={true}
      />
      <Field
        name='movieNameEN'
        options={genres}
        component={MovieInput}
        placeholder='Movie name'
        isMulti={true}
        type='text'
        lang={'Eng'}
      />
      <Field
        name='movieNameGE'
        options={genres}
        component={MovieInput}
        placeholder='ფილმის სახელი'
        isMulti={true}
        type='text'
      />
      <Field
        name='directorEN'
        options={genres}
        component={MovieInput}
        placeholder='Director'
        isMulti={true}
        type='text'
        lang={'Eng'}
      />
      <Field
        name='directorGE'
        options={genres}
        component={MovieInput}
        placeholder='რეჟისორი'
        isMulti={true}
        type='text'
      />
      <button type='submit' className='text-white'>
        Submit Form
      </button>
    </Form>
  );

  return (
    <Formik
      initialValues={defaultValues}
      render={renderForm}
      onSubmit={onSubmit}
    />
  );
};

export default MovieForm;
