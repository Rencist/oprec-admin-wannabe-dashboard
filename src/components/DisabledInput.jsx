export default function DisabledInput({
  label,
  className = '',
  placeholder = '',
}) {
  return (
    <>
      <div className='w-full px-4 flex flex-col'>
        {/* <ul className='list-inside'> */}
          <div className='sm:grid sm:grid-cols-12 text-sm md:text-lg'>
            <div className="col-span-6">
              <p className={className}>{label}</p>
              {/* <p className={className}>:</p> */}
            </div>
            <p className={className + ' col-span-6'}>{placeholder}</p>
          </div>
        {/* </ul> */}
      </div>

      {/* <div className='flex flex-col justify-start w-full mt-5'>
        <label className='font-secondary text-xl text-dashboard font-bold'>{label}</label>
        <p
          // disabled= {true}
          className={className}
          // placeholder={placeholder}
        >
          {placeholder}
          </p>
      </div> */}
    </>
  );
}
