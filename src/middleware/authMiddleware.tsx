import { Navigate } from 'react-router-dom';
import { getAuthToken } from '../services/tokenService'; // Adjust the import path as needed

const authMiddleware = async (): Promise<JSX.Element | null> => {
  const token = await getAuthToken();
  
  // If there is no token, redirect to home
  if (!token) {
    return <Navigate to="/" />;
  }
  
  // If token exists, allow access (return null)
  return null;
};

export default authMiddleware;
