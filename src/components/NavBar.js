import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <Nav>
      <Logo href="/">Admin Panel</Logo>
      <Hamburger onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <SidebarToggle onClick={toggleSidebar} isOpen={isOpen}>
        <FaBars />
        <Menu isOpen={isOpen}>
          {!isAuthenticated ? (
            <>
              <MenuLink href="/signin">Sign In</MenuLink>
              <MenuLink href="/signup">Sign Up</MenuLink>
            </>
          ) : (
            <>
              <MenuLink href="/profile">Profile</MenuLink>
              <MenuLink as="button" onClick={handleLogout}>
                Logout
              </MenuLink>
            </>
          )}
        </Menu>
      </SidebarToggle>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #333;
  padding: 0 20px;
`;

const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const SidebarToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 20px;

  svg {
    color: #fff;
    font-size: 1.8rem;
    margin-right: 10px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 200px;
  background: #333;
  position: absolute;
  top: 60px;
  left: 0;
  padding: 20px;
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

