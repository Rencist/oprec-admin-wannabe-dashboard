import React from 'react'
import DisabledInput from '../../components/DisabledInput'

function DetailUser({data}) {
  return (
    <>
      <div className='p-10 mt-12 w-full grid gap-4 bg-white rounded-lg shadow-lg'>
        <h1 className='font-primary text-dashboard text-3xl text-center mb-6'>
          Detail User
        </h1>
        <DisabledInput
                label='Nama'
                placeholder={data.fullname}
                className={'font-secondary text-xl text-dashboard'}
        />
        <DisabledInput
                label='Email'
                placeholder={data.email}
                className={'font-secondary text-xl text-dashboard'}
        />
      </div>
    </>
  )
}

export default DetailUser