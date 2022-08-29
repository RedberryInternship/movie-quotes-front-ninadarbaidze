import { MainHeader, SideBar } from 'components';
import { ChildrenAndClass } from 'types';
import { useFeedWrapper } from './useFeedWrapper';

const FeedWrapper: React.FC<ChildrenAndClass> = (props) => {
  const { children, className } = props;
  const { mobileMenu, setMobileMenu } = useFeedWrapper();

  return (
    <>
      <MainHeader setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      <div
        className='flex w-screen h-[100%] py-[100vh] bg-background pt-10 '
        onClick={() => setMobileMenu(false)}
      >
        <div className='lg:w-[30%] z-0'>
          <SideBar />
        </div>
        <div className={`${className} w-full md:px-[10%] lg:w-[70%] lg:px-0`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default FeedWrapper;
