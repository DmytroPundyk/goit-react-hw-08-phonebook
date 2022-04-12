import Header from '../header/Header';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Appbar = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
    </>
  );
};

export default Appbar;
