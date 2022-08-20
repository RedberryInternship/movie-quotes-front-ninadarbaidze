import { Field, Form, Formik, FormikProps } from 'formik';
import { MovieTextArea, Button, ImageInput } from 'components';
import { movieSchema } from 'schema';
import { useFeedQuoteForm } from './useFeedQuoteForm';
import { FormValues } from './types';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { MovieTypes } from 'components/Movies/ListOfMovies/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { getMovies } from 'services';
import { AuthContext } from 'store';

const FeedQuoteForm = () => {
  const { onSubmit, t, defaultValues } = useFeedQuoteForm();

  const renderForm: React.FC<FormikProps<FormValues>> = ({ errors }) => (
    <Form className='flex flex-col h-[80vh] overflow-scroll'>
      <div className='flex flex-col gap-10'>
        <Field
          name='quoteEN'
          component={MovieTextArea}
          placeholder='Movie discription'
          isMulti={true}
          lang={'Eng'}
          className='placeholder:italic placeholder:text-gray text-white'
        />
        <Field
          name='quoteGE'
          component={MovieTextArea}
          placeholder='ახალი ციტატა'
          isMulti={true}
          lang={'ქარ'}
          className='placeholder:italic placeholder:text-gray text-white'
        />
        <Field
          type='file'
          name='image'
          accept='image/*'
          component={ImageInput}
        />
      </div>
      <Field type='text' name='movieId' component={CustomDropdown} />
      <Button text={'Add Quote'} className='bg-red mt-2 mb-10 w-[100%]' />
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

export default FeedQuoteForm;
