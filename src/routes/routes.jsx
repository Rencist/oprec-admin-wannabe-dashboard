import AuthRoute from './AuthRoute';

// Admin
// import DashboardAdmin from '../pages/Admin/Dashboard';

// Pages
import Dashboard from '../pages/Auth/Dashboard';
import Login from '../pages/Auth/Login';
import Logout from '../pages/Auth/Logout';
import GuestRoute from './GuestRoute';
import AdminRoute from './AdminRoute';
import Pendaftar from '../pages/Admin/Pendaftar';
import DetailPendaftar from '../pages/Admin/DetailPendaftar';
import Register from '../pages/Auth/Register';

const routes = [
  {
    path: '/',
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    key: 'login',
    path: '/login',
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
    visible: true,
  },
  {
    key: 'register',
    path: '/register',
    element: (
      <GuestRoute>
        <Register />
      </GuestRoute>
    ),
    visible: true,
  },
  {
    key: 'logout',
    path: '/logout',
    element: (
      <AuthRoute>
        <Logout />
      </AuthRoute>
    ),
    visible: true,
  },

  // Admin
  // {
  //   key: 'login-admin',
  //   path: '/admin/login',
  //   element: (
  //     <GuestRoute from='admin'>
  //       <LoginAdmin />
  //     </GuestRoute>
  //   ),
  //   visible: true,
  // },
  {
    key: 'admin-detail-pendaftar',
    path: '/admin/pendaftar/:id',
    element: (
      <AdminRoute>
        <DetailPendaftar />
      </AdminRoute>
    ),
    visible: true,
  },
  {
    key: 'admin-pendaftar',
    path: '/pasien/check-in',
    element: (
      <AuthRoute>
        <Pendaftar />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    key: 'pasien',
    path: '/dashboard/pasien',
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
    visible: true,
  },
];

export default routes;
