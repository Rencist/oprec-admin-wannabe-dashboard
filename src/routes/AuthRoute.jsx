import { Navigate } from 'react-router-dom';
import { useAuthState } from '../contexts/AuthContext';
import Loading from '../components/Loading';

export default function AuthRoute({ children }) {
  const { authenticated, loading, user_type } = useAuthState();

  return (
    <>
      {loading ? (
        <Loading />
      ) : authenticated && user_type === 'admin' ? (
        <Navigate to='/admin' />
      ) : authenticated && user_type === 'user' ? (
        children
      ) : (
        <Navigate to='/login' />
      )}
    </>
  );
}
