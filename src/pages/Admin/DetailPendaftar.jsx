import { useForm, FormProvider } from 'react-hook-form';
import DashboardShellAdmin from '../../layouts/Admin/Dashboard';
import InputForm from '../../components/InputForm';
import { Link, useParams } from 'react-router-dom';
import TextAreaForm from '../../components/TextareaForm';
import { NavbarDetailPendaftar } from '../../components/Admin/NavbarComponent';
import useSWR from 'swr';
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function DetailPendaftar() {
  let { id } = useParams();
  const methods = useForm();
  const history = useNavigate();

  const { data: detailPeserta, error: fetchError } = useSWR(
    `/detail_staff/${id}`,
    {
      shouldRetryOnError: false,
      errorRetryInterval: 500,
    },
  );
  // useEffect(() => {
  // }, [detailPeserta]);

  if (fetchError) {
    toast.error('Tedapat kesalahan dalam pengambilan data, silahkan coba lagi');
    history('/admin/pendaftar');
  }
  if (!detailPeserta && !fetchError) {
    <Loading />;
  }
  return (
    <>
      <DashboardShellAdmin nav={'Pendaftar'}>
        <main className='px-20 py-10 min-h-screen'>
          {/* Navbar */}
          <NavbarDetailPendaftar data={detailPeserta?.data} />

          {/* Biodata Peserta */}
          <div className='flex flex-col justify-between mt-14'>
            <FormProvider {...methods}>
              <form>
                {/* Terima dan Tolak */}
                <div className='pb-2 flex justify-between items-center'>
                  <h1 className='text-xl font-secondary font-semibold  '>
                    Biodata Peserta
                  </h1>
                  <div className='flex items-center gap-x-2'>
                  </div>
                </div>
                <hr className='' />

                {/* Input */}
                {/* Nama */}
                <InputForm
                  type='text'
                  label='Nama'
                  id='nama'
                  disabled={true}
                  value={detailPeserta?.data?.nama}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 text-black rounded-xl w-1/2'
                  }
                  validate={{
                    required: true,
                  }}
                />
                <InputForm
                  type='text'
                  label='NRP'
                  id='nrp'
                  disabled={true}
                  value={detailPeserta?.data?.nrp}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl w-1/4'
                  }
                  validate={{
                    required: true,
                  }}
                />
                <InputForm
                  type='text'
                  label='Fakultas'
                  id='faculty'
                  disabled={true}
                  value={detailPeserta?.data?.fakultas}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl w-1/5'
                  }
                  validate={{
                    required: true,
                  }}
                />
                <InputForm
                  type='text'
                  label='Asal Departemen'
                  id='faculty'
                  disabled={true}
                  value = {detailPeserta?.data?.departemen}
                  // value={detailPeserta?.data?.departemen}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                <InputForm
                  type='text'
                  label='Nomor Telp / ID Line'
                  id='no-telp'
                  disabled={true}
                  value={detailPeserta?.data?.no_telp}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                <InputForm
                  type='text'
                  label='Kesibukan Saat Ini'
                  id='no-telp'
                  disabled={true}
                  value={detailPeserta?.data?.kesibukan}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                <InputForm
                  type='text'
                  label='Kenalan Sponsor'
                  id='no-telp'
                  disabled={true}
                  value={detailPeserta?.data?.sponsor}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />

                {/* Jawaban Pertanyaan */}
                <h1 className='text-xl font-secondary font-semibold pt-10 pb-2 text-center'>
                  Jawaban Pertanyaan
                </h1>
                <hr />
                {/* Pertanyaan 1 */}
                <TextAreaForm
                  label='Apa yang kamu ketahui tentang MABA CUP ?'
                  id='question-1'
                  disabled={true}
                  value={detailPeserta?.data?.pertanyaan}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                {/* Motivasi */}
                <TextAreaForm
                  label='Motivasi mendaftar menjadi staff MABA CUP 2022 ?'
                  id='question-2'
                  disabled={true}
                  value={detailPeserta?.data?.motivasi}
                  classNameL={'font-secondary font-semibold '}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />

                {/* Divisi Pilihan 1 */}
                <InputForm
                  type='text'
                  label='Divisi Pilihan 1'
                  id='divisi-1'
                  disabled={true}
                  value={detailPeserta?.data?.divisi_1}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                {/* Alasan memilih 1*/}
                <TextAreaForm
                  label='Alasan memilih pilihan 1 ?'
                  id='reason-1'
                  disabled={true}
                  value={detailPeserta?.data?.alasan_1}
                  classNameL={'font-secondary font-semibold '}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                {/* Divisi Pilihan 2 */}
                <InputForm
                  type='text'
                  label='Divisi Pilihan 2'
                  id='divisi-2'
                  disabled={true}
                  value={detailPeserta?.data?.divisi_2}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                {/* Alasan memilih 1*/}
                <TextAreaForm
                  label='Alasan memilih pilihan 2 ?'
                  id='reason-1'
                  disabled={true}
                  value={detailPeserta?.data?.alasan_2}
                  classNameL={'font-secondary font-semibold '}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />

                {/* Kelengkapan Berkas */}
                <h1 className='text-xl font-secondary font-semibold pt-10 text-center pb-2'>
                  Kelengkapan Berkas
                </h1>
                <hr />
                <div className='flex  items-center gap-x-3'>
                  <InputForm
                    type='text'
                    label='Link Upload Sosial Media'
                    id='upload-sosial-media'
                    disabled={true}
                    value={detailPeserta?.data?.link_bukti}
                    classNameL={'font-secondary font-semibold'}
                    classNameI={
                      'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                    }
                    validate={{
                      required: true,
                    }}
                  />
                    <a target='_blank' href={detailPeserta?.data?.link_bukti} 
                      className="  w-20 text-center"
                      rel="noreferrer"
                      >
                        <br className='mt-2'/>
                       <p className='bg-blue-500 font-secondary text-white p-2 rounded-3xl'>
                        Lihat
                       </p>
                    </a>
                </div>
                <div className='flex  items-center gap-x-3'>
                <InputForm
                  type='text'
                  label='Link KRSM'
                  id='upload-krsm'
                  disabled={true}
                  value={detailPeserta?.data?.link_krsm}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                  <a target='_blank' href={detailPeserta?.data?.link_krsm} 
                    className="  w-20 text-center"
                    rel="noreferrer"
                    >
                      <br className='mt-2'/>
                      <p className='bg-blue-500 font-secondary text-white p-2 rounded-3xl'>
                      Lihat
                      </p>
                  </a>
                </div>
                <div className='flex  items-center gap-x-3'>
                <InputForm
                  type='text'
                  label='Link GDrive CV ATS/Kreatif'
                  id='upload-sosial-media'
                  disabled={true}
                  value={detailPeserta?.data?.link_cv}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                <a target='_blank' href={detailPeserta?.data?.link_cv} 
                    className="  w-20 text-center"
                    rel="noreferrer"
                    >
                    <br className='mt-2'/>
                    <p className='bg-blue-500 font-secondary text-white p-2 rounded-3xl'>
                    Lihat
                    </p>
                </a>
                
                </div>

                <div className='flex  items-center gap-x-3'>
                <InputForm
                  type='text'
                  label='Link GDrive Portofolio'
                  id='upload-sosial-media'
                  disabled={true}
                  value={detailPeserta?.data?.link_portfolio}
                  classNameL={'font-secondary font-semibold'}
                  classNameI={
                    'font-secondary font-normal bg-[#E2EBF5] px-5 py-2 rounded-xl'
                  }
                  validate={{
                    required: true,
                  }}
                />
                  <a target='_blank' href={detailPeserta?.data?.link_portfolio} 
                    className="  w-20 text-center"
                    rel="noreferrer"
                  >                  
                    <br className='mt-2'/>
                    <p className='bg-blue-500 font-secondary text-white p-2 rounded-3xl'>
                    Lihat
                    </p>
                </a>

                </div>
              </form>
            </FormProvider>
          </div>
        </main>
      </DashboardShellAdmin>
    </>
  );
}
