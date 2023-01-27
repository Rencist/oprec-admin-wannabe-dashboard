import { useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SelectInput({
  label,
  helperText = '',
  id,
  placeholder = '',
  readOnly = false,
  options = [],
  validation,
  disabled = false,
  classNameL,
  classNameS,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
    <div className="flex flex-col font-secondary mt-5">
      <label className={classNameL}>
        {label}
      </label>
        <select
          {...register(id, validation)}
          name={id}
          id={id}
          disabled={disabled}
          className={classNameS}
          aria-describedby={id}
        >
          <option value='' disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>

        {errors[id] && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
            <HiExclamationCircle className='text-xl text-red-500' />
          </div>
        )}
      <div className='mt-1'>
        {helperText !== '' && (
          <p className='font-secondary text-xl text-dashboard font-bold'>{helperText}</p>
        )}
        {errors[id] && (
          <span className='text-sm text-red-500'>{errors[id].message}</span>
        )}
      </div>
    </div>
    </>
  );
}
