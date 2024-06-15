import React, { useState } from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
// import ProductModule from './ProductModule';
// import OrderModule from './OrderModule';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with actual authentication state
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <div className="main-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      {/* <Content> */}
        {/* <ProductModule />
        <OrderModule /> */}
      {/* </Content> */}
    </div>
  );
};

export default AdminDashboard;

// const Content = styled.div`
//   margin-left: 200px; 
//   padding: 20px;
// `;
