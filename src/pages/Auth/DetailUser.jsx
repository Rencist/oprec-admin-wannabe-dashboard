import React from 'react'
import DisabledInput from '../../components/DisabledInput'
import DetailPendaftar from './DetailPendaftar';

function DetailUser({data}) {
  let isPendaftar = "Belum Mendaftar";
  let dataPendaftar = '';
  if(data.is_pendaftar) {
    isPendaftar = "Sudah Mendaftar";
    dataPendaftar = <DetailPendaftar/>;
  }
  return (
    <>
      <div className='grid'>
      <div className='p-10 mt-12 w-full grid gap-4 bg-white rounded-lg shadow-lg'>
        <h1 className='font-primary text-dashboard text-3xl text-center mb-6'>
          Detail User
        </h1>
        <DisabledInput
                label='Nama'
                placeholder={data.name}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Email'
                placeholder={data.email}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Status Mendaftar'
                placeholder={isPendaftar}
                className={'font-secondary text-xl text-dashboard'}
        />
      </div>
      {dataPendaftar}
      </div>
    </>
  )
}

export default DetailUser