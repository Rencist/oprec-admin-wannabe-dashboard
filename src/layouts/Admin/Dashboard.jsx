import { useState } from 'react';
import Navbar from '../../components/Admin/Navbar';
import SidebarAdmin from '../../components/Admin/Sidebar';
export default function DashboardShellAdmin({ children, nav }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='flex h-screen overflow-hidden bg-gray-100'>
        <SidebarAdmin
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          nav={nav}
        />
        <div className='flex-1 overflow-auto focus:outline-none '>
          <Navbar setSidebarOpen={setSidebarOpen} />
          {children}
        </div>
      </div>
    </>
  );
}
