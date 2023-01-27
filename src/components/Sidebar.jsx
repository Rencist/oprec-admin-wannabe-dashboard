import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiViewGrid, HiDesktopComputer, HiUser, HiXCircle, HiLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

import UnstyledLink from '../components/UnstyledLink';
import { useAuthDispatch } from '../contexts/AuthContext';

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard/user',
    icon: HiViewGrid,
    current: false,
  },

  {
    name: 'List Lab',
    href: '/user/list-lab',
    icon: HiDesktopComputer,
    current: false,
  },

  {
    name: 'Oprec Admin',
    href: '/user/oprec-admin',
    icon: HiUser,
    current: false,
  },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen, nav }) {
  const authDispatch = useAuthDispatch();
  const history = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    authDispatch('LOGOUT');
    setSidebarOpen(false);
    history('/login');
  };
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 z-40 flex lg:hidden'
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex flex-col flex-1 w-full max-w-[200px] pt-5 pb-4 dashboard'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 pt-2 -mr-12'>
                  <button
                    className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <HiXCircle
                      className='w-6 h-6 text-white'
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex items-center flex-shrink-0 px-4'>
                <UnstyledLink
                  openNewTab={false}
                  href='/'
                >
                  <img
                    className='h-20 mx-auto'
                    src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
                    alt='colored-title'
                  />
                </UnstyledLink>
              </div>
              <nav
                className='flex-shrink-0 h-full mt-5 overflow-y-auto divide-y divide-dark-700'
                aria-label='Sidebar'
              >
                <div className='px-2 space-y-1 flex flex-col'>
                  {/*
                   */}
                  {navigation.map((item, index) => (
                    <Link key={index} to={item.href}>
                      <div
                        className={`p-3 rounded-md ${
                          nav === item.name
                            ? 'bg-white text-dashboard-100'
                            : 'text-white'
                        }`}
                      >
                        <item.icon size={24} key={item.name} />
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className='hidden h-full lg:flex lg:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pt-5 pb-4 overflow-y-auto dashboard'>
            <div className='flex items-center flex-shrink-0 px-4 justify-center'>
              <UnstyledLink openNewTab={false} href='/'>
                <img
                  className='h-20'
                  src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
                  alt='colored-title'
                />
              </UnstyledLink>
            </div>
            <nav
              className='flex flex-col flex-1 mt-5 overflow-y-auto divide-y divide-gray-600'
              aria-label='Sidebar'
            >
              <div className='px-2 space-y-1 flex flex-col'>
                {/* Maping */}
                {navigation.map((item, index) => (
                  <Link key={index} to={item.href} >
                    <div
                      className={`p-3 rounded-md flex items-center gap-x-3 ${
                        nav === item.name
                          ? 'bg-white text-dashboard'
                          : 'text-white'
                      }`}
                    >
                      <item.icon size={24} key={item.name} />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </nav>
            <div className='bottom-10 -translate-y-6'>
              {/* Hr */}
              <div className='flex items-center  px-3 md:px-4 lg:px-6 gap-x-3'>
                <HiLogout size={24} className='text-white' />
                <p
                  className='text-white font-secondary hover:text-gray-200 cursor-pointer'
                  onClick={handleLogOut}
                >
                  Sign Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
