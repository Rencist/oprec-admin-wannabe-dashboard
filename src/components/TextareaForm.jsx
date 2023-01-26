import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { HiExclamationCircle } from 'react-icons/hi';

export default function TextareaForm({
  value = '',
  label = '',
  placeholder = 'Tulis sesuatu...',
  id,
  disabled = false,
  classNameL,
  classNameI,
  validate,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className='flex flex-col justify-start w-full mt-5'>
        <label className={classNameL}>{label}</label>
        <textarea
          {...register(id, validate)}
          name={id}
          id={id}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          className={classNameI}
        />
      </div>
      {errors[id] && (
        <div className='flex flex-row mt-1'>
          <HiExclamationCircle className='text-xl text-red-500' />
          <span className='text-sm text-red-500'>{errors[id].message}</span>
        </div>
      )}
    </>
  );
}
