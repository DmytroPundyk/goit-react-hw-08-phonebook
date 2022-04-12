import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  let location = useLocation();

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/user" state={{ from: location }} replace />
      ) : (
        children
      )}
    </>
  );
};

export default PublicRoute;
