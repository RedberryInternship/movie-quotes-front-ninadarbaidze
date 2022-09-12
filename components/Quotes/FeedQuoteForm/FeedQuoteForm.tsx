import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import {
  MovieTextArea,
  Button,
  ImageInput,
  SingleMovie,
  CustomDropdown,
} from 'components';
import { quoteSchema } from 'schema';
import { useFeedQuoteForm } from './useFeedQuoteForm';
import { QuoteDefaultValues } from './types';
import { Data } from 'types';

const FeedQuoteForm: React.FC<Data> = ({ data }) => {
  const { onSubmit, t, defaultValues, quoteCtx } = useFeedQuoteForm();

  const renderForm: React.FC<FormikProps<QuoteDefaultValues>> = () => (
    <Form className='flex flex-col h-full lg:min-h-[60vh] overflow-auto'>
      <div className='flex flex-col gap-10'>
        {quoteCtx.isMovieQuote && <SingleMovie data={data} />}

        <div className='h-[3rem]'>
          <Field
            name='quoteEN'
            component={MovieTextArea}
            placeholder='Start create new quote'
            lang={'Eng'}
            className='placeholder:italic placeholder:text-gray text-white'
          />
          <ErrorMessage name='quoteEN'>
            {(msg) => (
              <div className='mt-1  text-red text-xs pl-3'>{`${t(
                `${msg}`
              )}`}</div>
            )}
          </ErrorMessage>
        </div>

        <div className='h-[3rem]'>
          <Field
            name='quoteGE'
            component={MovieTextArea}
            placeholder='ახალი ციტატა'
            lang={'ქარ'}
            className='placeholder:italic placeholder:text-gray text-white'
          />
          <ErrorMessage name='quoteGE'>
            {(msg) => (
              <div className='mt-1 text-red text-xs pl-3'>{`${t(
                `${msg}`
              )}`}</div>
            )}
          </ErrorMessage>
        </div>
        <div className='h-[5rem]'>
          <Field
            type='file'
            name='image'
            accept='image/*'
            component={ImageInput}
          />
          <ErrorMessage name='image'>
            {(msg) => (
              <div className='mt-1 text-red text-xs pl-3'>
                {`${t(`${msg}`)}`}
              </div>
            )}
          </ErrorMessage>
        </div>
      </div>
      {!quoteCtx.isMovieQuote && (
        <>
          <div>
            <Field type='text' name='movieId' component={CustomDropdown} />
            <ErrorMessage name='movieId'>
              {(msg) => (
                <div className='mt-1 text-red text-xs pl-3'>{`${t(
                  `${msg}`
                )}`}</div>
              )}
            </ErrorMessage>
          </div>
        </>
      )}
      <Button
        text={t('quotes:addQtBtn')}
        className='bg-red mt-12 mb-10 w-[100%]'
      />
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
