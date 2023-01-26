import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiOutlineExclamation, HiOutlineX } from 'react-icons/hi';

import { classNames } from '../../lib/helper';

export default function CreateTeamAlert({
  action,
  data,
  isLoading,
  open,
  setOpen,
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-10 overflow-y-auto'
        open={open}
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
              <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
                <button
                  type='button'
                  className='text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close</span>
                  <HiOutlineX className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>
              <div className='sm:flex sm:items-start'>
                <div className='flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-yellow-100 rounded-full sm:mx-0 sm:h-10 sm:w-10'>
                  <HiOutlineExclamation
                    className='w-6 h-6 text-yellow-600'
                    aria-hidden='true'
                  />
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Pembuatan Tim
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Apakah anda yakin bahwa data yang telah dimasukkan sudah
                      benar dan sesuai? Kesalahan data akan memperlambat proses
                      verifikasi panitia
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  disabled={isLoading}
                  className={classNames(
                    'inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm',
                    isLoading && 'filter brightness-90 cursor-wait',
                  )}
                  onClick={() => action(data)}
                >
                  Yakin
                </button>
                <button
                  type='button'
                  className='inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-400 sm:mt-0 sm:w-auto sm:text-sm'
                  onClick={() => setOpen(false)}
                >
                  Batal
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
