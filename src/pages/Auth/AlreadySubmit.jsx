export default function AlreadySubmit(data) {

  return (
    <>
      <div className='min-h-screen w-full flex justify-center items-center gap-x-5'>
        <div className=' w-full md:w-1/2 p-20'>
          <h1 className='font-primary text-dashboard text-3xl text-center'>
            Anda sudah terdaftar untuk menjadi calon admin lab, mohon tunggu notifikasi lebih lanjut untuk tahap seleksi berikutnya :)
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
