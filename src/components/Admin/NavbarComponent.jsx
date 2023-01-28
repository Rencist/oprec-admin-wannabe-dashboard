import { FaRegUserCircle, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export function NavbarDetailPendaftar({ data }) {
  return (
    <div className='flex justify-between '>
      {/* Path */}
      <div className='flex items-center '>
        <Link to='/user/check-in'>
          <FaWindowClose className='text-dashboard' size={30} />
        </Link>
        <p className='font-secondary text-base text-gray-600 ml-3 hover:underline'>
          Pendaftar &ensp;/&ensp; {data?.nama} &ensp;/&ensp;
          <span className='text-dashboard font-bold'>Biodata Pendaftar</span>
        </p>
        {/* data.status */}
      </div>
      <div className='flex items-center '>
        <p>Status : &ensp; </p>
      </div>
    </div>
  );
}

export function NavbarDashboard({data}) {
  return (
    <nav className='flex items-center mb-6'>
      <FaRegUserCircle size={25} className='text-dashboard' />
      <p className='ml-2 font-secondary font-base text-sm'>
        Selamat Datang, <span className='text-[#5189C4] capitalize'>{`${data?.name}`}</span>
      </p>
    </nav>
  );
}
