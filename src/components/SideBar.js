import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle, isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout(); // Perform logout logic
    navigate('/signin'); // Navigate to signin page after logout
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarToggle onClick={toggle}>
        <FaBars />
      </SidebarToggle>
      <SidebarContent>
        <SidebarTitle>Menu</SidebarTitle>
        <SidebarMenu>
          <SidebarMenuItem href="/products">Products</SidebarMenuItem>
          <SidebarMenuItem href="/orders">Orders</SidebarMenuItem>
          {isAuthenticated && (
            <SidebarMenuItem onClick={handleLogoutClick}>Logout</SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? '200px' : '80px')};
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease;
  z-index: 999;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  }
`;

const SidebarToggle = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 60px;
  font-size: 1.5rem;
  cursor: pointer;

  svg {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const SidebarTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarMenuItem = styled.div`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
