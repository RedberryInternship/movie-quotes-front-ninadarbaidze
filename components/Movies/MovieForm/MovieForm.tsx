import React, { useRef, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import {
  SelectInput,
  MovieInput,
  MovieTextArea,
  Button,
  ImageInput,
} from 'components';
import { useMovieForm } from './useMovieForm';

const MovieForm = () => {
  const { genres, onSubmit, defaultValues } = useMovieForm();

  // const fileRef = useRef<HTMLInputElement>(null);

  const renderForm = () => (
    <Form>
      {/* <input
        type='file'
        name='image'
        ref={fileRef}
        accept='image/*'
        hidden
        onChange={(event) => {
          setFieldValue('file', event.target.files[0]);
        }} */}
      {/* /> */}

      <Field type='file' name='photo' accept='image/*' component={ImageInput} />

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
        name='genre'
        options={genres}
        component={SelectInput}
        placeholder='Genre'
        isMulti={true}
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
      <Field
        name='descriptionEN'
        options={genres}
        component={MovieTextArea}
        placeholder='Movie discription'
        isMulti={true}
        type='text'
        lang={'Eng'}
      />
      <Field
        name='descriptionGE'
        options={genres}
        component={MovieTextArea}
        placeholder='ფილმის აღწერა'
        isMulti={true}
        type='text'
        lang={'ქარ'}
      />
      <Button text={'Add movie'} className='bg-red mt-4 mb-10 w-[100%]' />
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
