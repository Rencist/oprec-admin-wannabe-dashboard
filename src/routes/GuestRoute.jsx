import { Navigate } from 'react-router-dom';
import { useAuthState } from '../contexts/AuthContext';
import Loading from '../components/Loading';

export default function GuestRoute({ children, from }) {
  const { authenticated, loading, user_type } = useAuthState();

  return (
    <>
      {loading ? (
        <Loading />
      ) : authenticated && (from === 'pasien' || user_type === 'pasien') ? (
        <Navigate to={'/dashboard/pasien'} />
      ) : authenticated && (from === 'kadiv' || user_type === 'kadiv') ? (
        <Navigate to={'/admin'} />
      ) : authenticated && (from === 'user' || user_type === 'user') ? (
        <Navigate to={'/'} />
      ) : (
        children
      )}
    </>
  );
}
