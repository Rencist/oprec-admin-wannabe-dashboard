import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import InputPassword from '../../components/InputPassword';
import useLoadingToast from '../hooks/useLoadingToast';
import CreateTeamAlert from '../../components/Alert/CreateTeamAlert';

export default function Register() {
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
      axios.post('/auth/register', formData),
      {
        loading: 'Loading...',
        success: (res) => {
          history('/login');
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
                label='Nama'
                type='name'
                id='name'
                placeholder={'Masukan Nama'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'Nama tidak boleh kosong',
                }}
              />
              <div className='mt-6'></div>
              <Input
                label='Email'
                type='email'
                id='email'
                placeholder={'Masukan Email'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'Email tidak boleh kosong',
                }}
              />
              <div className='mt-6'></div>
              <InputPassword
                label='Password'
                type='password'
                id='password'
                placeholder={'Masukan Password'}
                classNameL={'font-secondary text-xl text-dashboard font-bold'}
                classNameI={
                  'p-4 outline h-10 outline-3 outline-dashboard mt-2 rounded'
                }
                validate={{
                  required: 'Password tidak boleh kosong',
                  minLength: {
                    value: 8,
                    message: 'Password harus lebih dari 8 karakter',
                  },
                }}
              />
              <SubmitButton
                name='Sign In'
                type='submit'
                className='mt-6 bg-dashboard-100 outline outline-2 lg:w-1/4 w-1/2 h-10 rounded-lg font-secondary text-white font-bold'
              />
              <p
                className='font-secondary text-center text-dashboard mt-4 cursor-pointer hover:underline'
                onClick={() => history('/login')}
              >
                Udah punya akun? login yuk{' '}
              </p>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
