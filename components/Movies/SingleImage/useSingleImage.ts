import { useRouter } from 'next/router';

export const useSingleImage = (props: string) => {
  const { image } = props;
  const router = useRouter();

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${image as string}`;
  };

  return { router, myLoader };
};
