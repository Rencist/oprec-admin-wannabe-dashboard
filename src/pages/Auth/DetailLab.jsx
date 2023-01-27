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
      <div className='justify-evenly grid grid-rows-4 grid-flow-col gap-4'>
        {labData.data.map(res => res.name)}
        {/* {console.log(data.data.id)} */}
      </div>
      <div className='justify-evenly grid grid-rows-4 grid-flow-col gap-4'>
        {data.data.desciption}
      </div>
    </>
  );
}
