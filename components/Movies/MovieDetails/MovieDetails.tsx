import React from 'react';
import Image from 'next/image';
import { EditBtn, Trash } from 'components';
import { useTranslation } from 'next-i18next';

const MovieDetails: React.FC<any> = ({ data }) => {
  const { t } = useTranslation();
  let genresArray = data.genres[0].split(',');

  return (
    <div className=''>
      <h1 className='text-white text-xl sm:text-2xl font-helvetica_ge font-thin'>
        {t('movies:descriptionH1')}
      </h1>
      <div className='flex gap-4 mt-12'>
        <div className='w-3/5 h-[23rem] rounded-xl overflow-clip'>
          <Image
            src='/assets/images/image-1.png'
            className=''
            objectFit='cover'
            layout='responsive'
            width={600}
            height={600}
            alt='movie'
          />
        </div>
        <div className='w-2/5 flex flex-col relative gap-4'>
          <div className='flex absolute right-0 justify-around w-32 py-2 px-4 rounded-[10px] bg-gray50'>
            <EditBtn />
            <div className='bg-gray w-[1px] h-4' />
            <Trash />
          </div>
          <h2 className='text-beidge text-2xl'>
            {data.name} ({data.year})
          </h2>
          <ul className='flex gap-1 text-lg text-white'>
            {genresArray.map((genre: string) => (
              <li key={genre} className='bg-gray20 px-2 rounded-[4px]'>
                {t(`${genre}`)}
              </li>
            ))}
          </ul>
          <div className='flex gap-2'>
            <h3 className='text-gray10 text-lg'>{t('movies:director')}:</h3>
            <span className='text-white text-lg'>{data.director}</span>
          </div>
          <div className='flex gap-2'>
            <h3 className='text-gray10 text-lg'>{t('movies:budget')}:</h3>
            <span className='text-white text-lg'>{data.budget}</span>
          </div>
          <p className='text-gray10 text-lg'>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
