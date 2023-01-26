export default function DisabledInput({
  label,
  className = '',
  placeholder = '',
}) {
  return (
    <>
      <div className='w-full px-4'>
        <ul className='list-inside'>
          <div className='grid grid-cols-12 text-sm md:text-lg'>
            <li className={className + ' col-span-5'}>{label}</li>
            <p className={className}>:</p>
            <p className={className + ' col-span-6'}>{placeholder}</p>
          </div>
        </ul>
      </div>
    </>
  );
}
