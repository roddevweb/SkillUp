import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeader = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/settings');
  const minimalHeader = location.pathname.startsWith('/course/');
  return (
    <>
      {!hideHeader && <Header minimal={minimalHeader} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout; 