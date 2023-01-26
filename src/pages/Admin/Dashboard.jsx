import DashboardShellAdmin from '../../layouts/Admin/Dashboard';
import { NavbarDashboard } from '../../components/Admin/NavbarComponent';
// import { useAuthState } from '../../contexts/AuthContext'; 
import { useAuthDispatch } from '../../contexts/AuthContext';
import useSWR from 'swr';
import Loading from '../../components/Loading';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
export default function DashboardAdmin() {
  const dispatch = useAuthDispatch();
  // const adminData = useAuthState();
  const {data: userData ,error:dashboardError} = useSWR('/auth/me');


  useEffect(() => {
    if (userData) {
      dispatch('UPDATE', userData.data)
    }});
  if (dashboardError) {
    toast.error('Maaf terjadi kesalahan');
  } 
  if (!userData){
    return (
      <Loading />
    )
  }
  return (
    <DashboardShellAdmin nav={'Dashboard'}>
      <div className='min-h-screen h-full px-20 py-6 relative'>
        {/* Navbar */}
        <NavbarDashboard data={userData.data}/>
        <div className='w-full flex justify-evenly gap-x-5'>
        </div>

      </div>
    </DashboardShellAdmin>
  );
}
