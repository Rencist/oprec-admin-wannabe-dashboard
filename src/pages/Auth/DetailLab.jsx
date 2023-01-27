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
            <li className={'selection:font-secondary text-xl text-dashboard col-span-5'}>Foto</li>
            <p className={'font-secondary text-xl text-dashboard'}>:</p>
          </div>
        </ul>
      </div>
      <div className='w-full flex justify-center'>
      <div className='justify-evenly grid grid-rows-4 grid-flow-col gap-4'>
        {labData.data.map(res => res.name)}
        {/* {console.log(data.data.id)} */}
      </div>
      </div>
      <div className='justify-evenly grid grid-rows-4 grid-flow-col gap-4'>
        {data.data.desciption}
      </div>
    </>
  );
}
