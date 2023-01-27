import { useAuthDispatch } from '../../contexts/AuthContext';
import useSWR from 'swr';
import Loading from '../../components/Loading';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function DetailLab(data) {
  const dispatch = useAuthDispatch();
  const {data: labData, error:labError} = useSWR(`/list_lab/admin/${data.data.id}`);

  useEffect(() => {
    if (labData) {
      dispatch('UPDATE', labData.data)
    }
  });
  if (labError) {
    toast.error('Maaf terjadi kesalahan');
  } 
  if (!labData){
    return (
      <Loading />
    )
  }
  return (
    <>
      <div className='w-full px-4'>
        <ul className='list-inside'>
          <div className='grid grid-cols-12 text-sm md:text-lg'>
            <li className={'selection:font-secondary text-xl text-dashboard col-span-5'}>Deskripsi Lab</li>
            <p className={'font-secondary text-xl text-dashboard'}>:</p>
          </div>
        </ul>
      </div>
      <div className='w-full px-4'>
        <ul className='list-inside'>
          <div className='text-justify text-sm md:text-lg'>
            <p className={'mt-5 font-secondary text-xl text-dashboard'}>{data.data.desciption}</p>
          </div>
        </ul>
      </div>
      <div className='w-full mt-10 px-4'>
        <ul className='list-inside'>
          <div className='grid grid-cols-12 text-sm md:text-lg'>
            <li className={'selection:font-secondary text-xl text-dashboard col-span-5'}>List Admin Lab</li>
            <p className={'font-secondary text-xl text-dashboard'}>:</p>
          </div>
        </ul>
      </div>
      <div className='w-full px-4 mt-5'>
        <ul className='list-inside'>
          <div className='text-justify justify-center text-sm md:text-lg'>
            <ul className='list-inside'>
              <div className='grid grid-cols-12 text-sm md:text-lg'>
              {labData.data.map(res => 
                <li className={'selection:font-secondary text-xl text-dashboard col-span-6 mt-1'}>{res.name}</li>
              )}
              </div>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}
