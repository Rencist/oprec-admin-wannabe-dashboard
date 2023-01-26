import DashboardShellPasien from '../../layouts/Dashboard';
import { useAuthDispatch } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { NavbarDashboard } from '../../components/Admin/NavbarComponent';
import useSWR from 'swr';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading';
import OprecAdmin from '../Auth/OprecAdmin';
import AlreadySubmit from '../Auth/AlreadySubmit';

export default function Pendaftar() {
  const dispatch = useAuthDispatch();
  const {data: pasienData, error:dashboardError} = useSWR('/auth/me');

  useEffect(() => {
    if (pasienData) {
      dispatch('UPDATE', pasienData.data)
    }});
  if (dashboardError) {
    toast.error('Maaf terjadi kesalahan');
  } 
  if (!pasienData){
    return (
      <Loading />
    )
  }

  let isPendaftar = <OprecAdmin />;
  if(pasienData.data.is_pendaftar) isPendaftar = <AlreadySubmit data={pasienData} />

  return (
    <DashboardShellPasien nav={'Oprec Admin'}>
      <div className='min-h-screen h-full px-20 py-6 relative'>
        {/* Navbar */}
        <NavbarDashboard data={pasienData.data}/>
        {isPendaftar}
      </div>
    </DashboardShellPasien>
  );
}
