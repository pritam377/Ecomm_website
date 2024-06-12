// src/components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="/">Admin Panel</Logo>
      <Hamburger onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/signin">Sign In</MenuLink>
        <MenuLink href="/signup">Sign Up</MenuLink>
      </Menu>
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

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: #333;
    transition: max-height 0.3s ease-in;
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
  }
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #f0a500;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
`;