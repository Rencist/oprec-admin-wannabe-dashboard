import DashboardShellPasien from '../../layouts/Dashboard';
import { useAuthDispatch } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { NavbarDashboard } from '../../components/Admin/NavbarComponent';
import useSWR from 'swr';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading';
// import CheckIn from '../Auth/CheckIn';

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

  return (
    <DashboardShellPasien nav={'Check In'}>
      <div className='min-h-screen h-full px-20 py-6 relative'>
        {/* Navbar */}
        <NavbarDashboard data={pasienData.data}/>
        {/* <CheckIn /> */}
      </div>
    </DashboardShellPasien>
  );
}
