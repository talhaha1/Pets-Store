import React from 'react';
import Nav from '../../Components/NavBar/nav';
import Footer from '../../Components/Footer/footer';
import Login from '../../Components/Login/Login';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <Nav />
      <div className="main-content">
        <Login onLogin={onLogin} />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
