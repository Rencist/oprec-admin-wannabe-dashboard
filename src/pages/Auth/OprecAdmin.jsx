import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { bearerToken } from '../../lib/helper';
import useLoadingToast from '../hooks/useLoadingToast';
import CreateTeamAlert from '../../components/Alert/CreateTeamAlert';
import SelectInput from '../../components/SelectInput';

export default function OprecAdmin(data) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const history = useNavigate();
  const isLoading = useLoadingToast();

  const methods = useForm();
  const { handleSubmit} = methods;

  const handleCreateTeam = async (data) => {
    const formData = new FormData();
    
    for (let key in data) {
      formData.append(key, data[key]);
    }

    toast.promise(
      axios.post('/pendaftar_lab/create', formData, { headers: { ...bearerToken() } }),
      {
        loading: 'Loading...',
        success: (res) => {
          history('/dashboard/user');
          return 'Berhasil membuat akun';
        },
        error: (err) => {
          return err.response.data.message;
        },
      }
    );
  };

  const onSubmit = (data) => {
    setIsAlertOpen(true);
    setFormData(data);
  };
  return (
    <>
    {/* {data.data.map(res => res.id)} */}
      <CreateTeamAlert
        action={handleCreateTeam}
        data={formData}
        isLoading={isLoading}
        open={isAlertOpen}
        setOpen={setIsAlertOpen}
      />
      <div className='min-h-screen w-full flex justify-center items-center gap-x-5'>
        <div className=' w-full md:w-1/2 p-20'>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className='font-primary text-dashboard md:text-6xl text-5xl text-center'>
                Selamat Datang
              </h1>
              <div className='mt-12'></div>
              <Input
                label='Nama Panggilan'
                type='name'
                id='name'
                placeholder={'Masukan Nama Panggilan'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'Nama Panggilan tidak boleh kosong',
                }}
              />
              <div className='mt-6'></div>
              <SelectInput
                id='list_lab_id'
                label='Lab'
                placeholder='Pilih Lab'
                classNameL='font-secondary text-xl text-dashboard font-bold'
                classNameS='p-2 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                options={data.data}
                validate={{
                  required: "Lab tidak boleh kosong",
                }}
              />
              <div className='mt-6'></div>
              <Input
                label='NRP'
                type='nrp'
                id='nrp'
                placeholder={'Masukan NRP'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'NRP tidak boleh kosong',
                }}
              />
              <div className='mt-6'></div>
              <Input
                label='Nomor Telpon'
                type='no_telp'
                id='no_telp'
                placeholder={'Masukan Nomor Telpon'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'Nomor Telpon tidak boleh kosong',
                }}
              />
              <div className='mt-6'></div>
              <Input
                label='Alasan Kamu Mendaftar'
                type='alasan'
                id='alasan'
                placeholder={'Masukan Alasan Kamu Mendaftar'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'Alasan Kamu Mendaftar tidak boleh kosong',
                }}
              />
              <div className='mt-6'></div>
              <Input
                label='Motivasi Kamu Mendaftar'
                type='motivasi'
                id='motivasi'
                placeholder={'Masukan Motivasi Kamu Mendaftar'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'Motivasi Kamu Mendaftar tidak boleh kosong',
                }}
              />
              <div className='mt-6'></div>
              <Input
                label='Link Kreasi Yang Kamu Buat'
                type='link_kreasi'
                id='link_kreasi'
                placeholder={'Masukan Link Kreasi Yang Kamu Buat'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'Link Kreasi Yang Kamu Buat tidak boleh kosong',
                }}
              />
              <div className='mt-6'></div>
              <SubmitButton
                name='Submit'
                type='submit'
                className='mt-6 bg-dashboard-100 outline outline-2 lg:w-1/4 w-1/2 h-10 rounded-lg font-secondary text-white font-bold'
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
