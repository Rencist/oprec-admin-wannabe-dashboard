import { useForm, FormProvider } from 'react-hook-form';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthDispatch } from '../../contexts/AuthContext';
import InputPassword from '../../components/InputPassword';
import { bearerToken } from '../../lib/helper';

export default function Login() {
  const methods = useForm();
  const dispatch = useAuthDispatch();
  const history = useNavigate();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    toast.promise(
      axios
        .post('/auth/login', data)
        .then((res) => {
          const {data} = res.data;
          localStorage.setItem('token' , data.token);
          return axios.get('/auth/me', {headers: { ...bearerToken()}})
        })
        .then((res) => {
          dispatch('LOGIN', res.data.data)
        }), 
        {
          loading: 'Loading...',
          success: (res) => {
          history('/dashboard/user');
          return 'Berhasil masuk ke akun anda';
          },
          error: (err) => err.response.data.message,
        }
    )
    
  };
  return (
    <>
      <div className='min-h-screen w-full flex justify-center items-center gap-x-5'>
        <div className=' w-full md:w-1/2 p-20'>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className='font-primary text-dashboard md:text-6xl text-5xl text-center'>
                Selamat Datang
              </h1>
              <div className='mt-12'></div>
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
              <div className='mt-12'> </div>
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
                onClick={() => history('/register', { lmao:"state" })}
              >
                Belum punya? Buat akun yuk{' '}
              </p>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
