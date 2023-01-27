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
import ListLab from '../pages/Auth/ListLab';

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
    key: 'oprec-admin',
    path: '/user/oprec-admin',
    element: (
      <AuthRoute>
        <Pendaftar />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    key: 'list-lab',
    path: '/user/list-lab',
    element: (
      <AuthRoute>
        <ListLab />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    key: 'user',
    path: '/dashboard/user',
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
    visible: true,
  },
];

export default routes;
