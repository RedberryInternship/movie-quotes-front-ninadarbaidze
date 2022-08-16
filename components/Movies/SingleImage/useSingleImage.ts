import { useRouter } from 'next/router';

export const useSingleImage = (props: string | any) => {
  const { image } = props;
  const router = useRouter();

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${image}`;
  };

  return { router, myLoader };
};
