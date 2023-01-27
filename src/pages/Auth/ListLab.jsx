import { NavbarDashboard } from '../../components/Admin/NavbarComponent';
import { useAuthDispatch } from '../../contexts/AuthContext';
import useSWR from 'swr';
import Loading from '../../components/Loading';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import DashboardShellPasien from '../../layouts/Dashboard';
import { Link } from 'react-router-dom';
import DetailLab from './DetailLab';

export default function ListLab() {
  const dispatch = useAuthDispatch();
  const {data: pasienData, error:dashboardError} = useSWR('/auth/me');
  const {data: labData, error:labError} = useSWR('/list_lab');

  useEffect(() => {
    if (pasienData) {
      dispatch('UPDATE', pasienData.data)
    }
    if (labData) {
      dispatch('UPDATE', labData.data)
    }
  });
  if (dashboardError) {
    toast.error('Maaf terjadi kesalahan');
  } 
  if (labError) {
    toast.error('Maaf terjadi kesalahan');
  } 
  if (!pasienData){
    return (
      <Loading />
    )
  }
  if (!labData){
    return (
      <Loading />
    )
  }
  return (
    <DashboardShellPasien nav={'List Lab'}>
      <div className='min-h-screen h-full px-20 py-6 relative'>
        {/* Navbar */}
        <NavbarDashboard data={pasienData.data}/>
        <div className='justify-evenly grid grid-rows-4 grid-flow-col gap-4'>
        {labData.data.map((res) => 
          <Link key={res.id} to={res.name} >
            <div className='p-5 mt-5 justify-center bg-white rounded-lg shadow-lg'>
              <h1 className='font-primary text-dashboard text-2xl text-center mb-6'>
                {res.name}
              </h1>
            </div>
            <DetailLab data={res} />
          </Link>
        )}
        </div>
      </div>
    </DashboardShellPasien>
  );
}
