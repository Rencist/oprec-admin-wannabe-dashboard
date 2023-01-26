export default function AlreadySubmit() {
  return (
    <>
      <div className='min-h-screen w-full flex justify-center items-center gap-x-5'>
        <div className=' w-full md:w-1/2 p-20'>
          <h1 className='font-primary text-dashboard text-3xl text-center'>
              Anda sudah mendaftar untuk menjadi calon admin 2023, mohon tunggu notifikasi lebih lanjut untuk seleksi admin berikutnya :)
          </h1>
          <img
            className='mt-10'
            src={`${process.env.PUBLIC_URL}/images/asa.jpg`}
            alt='colored-title'
          />
        </div>
      </div>
    </>
  );
}
