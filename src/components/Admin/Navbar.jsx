import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Menu, Transition } from '@headlessui/react';
import { HiBell, HiChevronDown, HiMenuAlt1 } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';

import { useAuthDispatch } from '../../contexts/AuthContext';
// import { useTeamDispatch } from '@/contexts/TeamContext';

// import { classNames } from '@/lib/helper';

export default function Navbar({ setSidebarOpen }) {
  // const { user } = useAuthState();
  const authDispatch = useAuthDispatch();
  // const teamDispatch = useTeamDispatch();

  const history = useNavigate();

  const handleLogout = () => {
    authDispatch('LOGOUT');
    // teamDispatch('CLEAR');
    history('/login');
  };

  return (
    <div className='relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none lg:hidden'>
      <button
        className='px-4 text-gray-400 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark-100 lg:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <HiMenuAlt1 className='w-6 h-6' aria-hidden='true' />
      </button>
      {/* Search bar */}
      <div className='flex justify-between flex-1 px-4 sm:px-6 lg:mx-auto lg:px-8'>
        <div className='flex flex-1'></div>
        <div className='flex items-center ml-4 md:ml-6'>
          <button className='p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-100'>
            <span className='sr-only'>View notifications</span>
            <HiBell className='w-6 h-6' aria-hidden='true' />
          </button>

          {/* Profile dropdown */}
          <Menu as='div' className='relative ml-3'>
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-100 lg:p-2 lg:rounded-md lg:hover:bg-gray-50'>
                    <VscAccount className='w-6 h-6' />
                    {/* <span className='hidden ml-3 text-sm font-medium text-gray-700 lg:block'> */}
                    {/* <span className='sr-only'>Open user menu for </span> */}
                    {/* {user?.name} */}
                    {/* </span> */}
                    <HiChevronDown
                      className='flex-shrink-0 hidden w-5 h-5 ml-1 text-gray-400 lg:block'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items
                    static
                    className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  >
                    {/* <Menu.Item>
                      {({ active }) => (
                        <Link
                          to='/my/edit-profile'
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          )}
                        >
                          Edit Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='a'
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700',
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item> */}
                    <button
                      onClick={handleLogout}
                      className='block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100'
                    >
                      Logout
                    </button>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
