import { useEffect } from 'react';
import Appbar from './components/appbar/Appbar';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import PublicRoute from './pages/PublicRoute';
import Signup from './pages/Signup';
import UserPage from './pages/UserPage';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUserOperation());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route
            index
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="goit-react-hw-08-phonebook"
            element={<Navigate to="/" replace />}
          />

          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />

          <Route
            path="user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
