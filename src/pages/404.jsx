import { Link } from 'react-router-dom';

// import _404 from '../pages/images/404/404.png';
export default function NotFound() {
  return (
    <>
      <div className='relative min-h-screen w-full page404 flex justify-center items-center flex-col p-10 text-center'>
        <h1 className='font-primary md:text-8xl text-6xl mb-8 text-white'>
          404
        </h1>
        <h2 className='font-secondary md:text-4xl text-2xl text-white mb-4 font-medium'>
          Whoops! looks like you're diving too deep
        </h2>
        <p className='font-secondary md:text-xl text-base text-white '>
          Don't worry we will provide it as soon as possible
        </p>
        <Link
          className=' text-white font-secondary md:text-xl text-base rounded-full   p-4 mb-10 bg-gradient-to-r from-[#FD28C1] to-[#A80352] mt-6 font-semibold'
          to='/ '
        >
          Return to Home
        </Link>
        <img
          src={`${process.env.PUBLIC_URL}/images/404/bottom.png`}
          alt='Bottom 404'
          className='bg-cover absolute bottom-0 '
        />
      </div>
    </>
  );
}
// bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
