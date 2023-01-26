import React from 'react'
import DisabledInput from '../../components/DisabledInput'
import ImageFetch from '../../components/ImageFetch'

function DetailPasien({data}) {
  return (
    <>
      <div className='p-10 mt-12 w-full grid gap-4 bg-white rounded-lg shadow-lg'>
        <DisabledInput
                label='Nama'
                placeholder={data.fullname}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Nomor Telpon'
                placeholder={data.no_telp}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Alamat'
                placeholder={data.alamat}
                className={'font-secondary text-xl text-dashboard'}
        />
        <div className='w-full px-4'>
          <ul className='list-inside'>
            <div className='grid grid-cols-12 text-sm md:text-lg'>
              <li className={'selection:font-secondary text-xl text-dashboard col-span-5'}>Foto</li>
              <p className={'font-secondary text-xl text-dashboard'}>:</p>
            </div>
          </ul>
        </div>
        <div className='w-full flex justify-center'>
          <ImageFetch
            imgpath={data.foto}
            tag='Foto'
          />
        </div>
      </div>
    </>
  )
}

export default DetailPasien