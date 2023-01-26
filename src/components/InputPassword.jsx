import { useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';
export default function InputPassword({
  type,
  label,
  id,
  validate = '',
  classNameL = '',
  disabled = false,
  classNameI = '',
  placeholder = '',
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className='flex flex-col justify-start w-full mt-5'>
        <label className={classNameL}>{label}</label>
        <input
          {...register(id, validate)}
          type={type}
          disabled={disabled}
          className={
            !errors[id]
              ? classNameI
              : 'p-4 outline h-10 outline-4 outline-red-600 mt-2 rounded'
          }
          placeholder={placeholder}
        />

        {errors[id] && (
          <div className='pt-2 flex flex-row mt-1'>
            <HiExclamationCircle className='text-xl text-red-500' />
            <span className='text-sm text-red-500'>{errors[id].message}</span>
          </div>
        )}
      </div>
    </>
  );
}
