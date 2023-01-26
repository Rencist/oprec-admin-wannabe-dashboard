import { NavbarDashboard } from '../../components/Admin/NavbarComponent';
import { useAuthDispatch } from '../../contexts/AuthContext';
import useSWR from 'swr';
import Loading from '../../components/Loading';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import DashboardShellPasien from '../../layouts/Dashboard';
import DetailPasien from './DetailPasien';
export default function Dashboar() {
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
    <DashboardShellPasien nav={'Dashboard'}>
      <div className='min-h-screen h-full px-20 py-6 relative'>
        {/* Navbar */}
        <NavbarDashboard data={pasienData.data}/>
        <div className='w-full flex justify-evenly gap-x-5'>
          <DetailPasien data={pasienData.data}/>
        </div>

      </div>
    </DashboardShellPasien>
  );
}
