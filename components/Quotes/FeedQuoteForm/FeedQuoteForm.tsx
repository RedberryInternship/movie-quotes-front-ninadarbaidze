import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import { MovieTextArea, Button, ImageInput, SingleMovie } from 'components';
import { quoteSchema } from 'schema';
import { useFeedQuoteForm } from './useFeedQuoteForm';
import { QuoteDefaultValues } from './types';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { Data } from 'types';

const FeedQuoteForm: React.FC<Data> = ({ data }) => {
  const { onSubmit, t, defaultValues, quoteCtx } = useFeedQuoteForm();

  const renderForm: React.FC<FormikProps<QuoteDefaultValues>> = () => (
    <Form className='flex flex-col h-full lg:min-h-[60vh] overflow-scroll'>
      <div className='flex flex-col gap-10'>
        {quoteCtx.isMovieQuote && <SingleMovie data={data} />}

        <Field
          name='quoteEN'
          component={MovieTextArea}
          placeholder='Start create new quote'
          lang={'Eng'}
          className='placeholder:italic placeholder:text-gray text-white'
        />
        <ErrorMessage name='quoteEN'>
          {(msg) => (
            <div className='mt-[-1rem] mb-[-2rem] text-red text-xs pl-3'>
              {msg}
            </div>
          )}
        </ErrorMessage>
        <Field
          name='quoteGE'
          component={MovieTextArea}
          placeholder='ახალი ციტატა'
          lang={'ქარ'}
          className='placeholder:italic placeholder:text-gray text-white'
        />
        <ErrorMessage name='quoteGE'>
          {(msg) => (
            <div className='mt-[-1rem] mb-[-2.5rem] text-red text-xs pl-3'>
              {msg}
            </div>
          )}
        </ErrorMessage>
        <Field
          type='file'
          name='image'
          accept='image/*'
          component={ImageInput}
        />
        <ErrorMessage name='image'>
          {(msg) => (
            <div className='mt-[-2rem] mb-[-0.5rem] text-red text-xs pl-3'>
              {msg}
            </div>
          )}
        </ErrorMessage>
      </div>
      {!quoteCtx.isMovieQuote && (
        <>
          <Field type='text' name='movieId' component={CustomDropdown} />
          <ErrorMessage name='movieId'>
            {(msg) => (
              <div className='mt-[0.5rem] text-red text-xs pl-3'>{msg}</div>
            )}
          </ErrorMessage>
        </>
      )}
      <Button text={'Add Quote'} className='bg-red mt-6 mb-10 w-[100%]' />
    </Form>
  );

  return (
    <Formik
      initialValues={defaultValues}
      render={renderForm}
      onSubmit={onSubmit}
      validationSchema={quoteSchema}
    />
  );
};

export default FeedQuoteForm;
