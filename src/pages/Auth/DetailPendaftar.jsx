import React from 'react'
import DisabledInput from '../../components/DisabledInput'
import { useAuthDispatch } from '../../contexts/AuthContext';
import useSWR from 'swr';
import Loading from '../../components/Loading';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function DetailPendaftar() {
  const dispatch = useAuthDispatch();
  const {data: pendaftarData, error:dashboardError} = useSWR('/pendaftar_lab/me');
  useEffect(() => {
    if (pendaftarData) {
      dispatch('UPDATE', pendaftarData.data)
    }
  });
  if (dashboardError) {
    toast.error('Maaf terjadi kesalahan');
  } 
  
  if (!pendaftarData){
    return (
      <Loading />
    )
  }

  return (
    <>
      <div className='p-10 mt-12 w-full grid gap-4 bg-white rounded-lg shadow-lg mb-12'>
        <h1 className='font-primary text-dashboard text-3xl text-center mb-6'>
          Detail Pendaftar
        </h1>
        <DisabledInput
                label='Nama'
                placeholder={pendaftarData.data.name}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Lab'
                placeholder={pendaftarData.data.list_lab_id}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='NRP'
                placeholder={pendaftarData.data.nrp}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Nomor Telpon'
                placeholder={pendaftarData.data.no_telp}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Alasan'
                placeholder={pendaftarData.data.alasan}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Motivasi'
                placeholder={pendaftarData.data.motivasi}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Link Kreasi'
                placeholder={pendaftarData.data.link_kreasi}
                className={'font-secondary text-xl text-dashboard'}
        />
      </div>
    </>
  )
}

export default DetailPendaftar