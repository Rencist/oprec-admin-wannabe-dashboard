import { ImSpinner8 } from 'react-icons/im';

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-dark text-light '>
      <ImSpinner8 className='mb-2 text-4xl animate-spin' />
      <p className='font-secondary'>Loading...</p>
    </div>
  );
}


