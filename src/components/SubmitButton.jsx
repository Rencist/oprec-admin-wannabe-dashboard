export default function SubmitButton({ className, type, name }) {
  return (
    <div className='mt-5 flex justify-center '>
      <button className={className} type={type}>
        {name}
      </button>
    </div>
  );
}
