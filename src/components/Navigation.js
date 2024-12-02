// src/components/Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import routes from '../routes';

const NavContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between; /* Space between Previous and Next */
  padding: 0 20px;
  z-index: 10;
`;

const NavButton = styled(motion(Link))`
  padding: 15px 30px;
  background-color: #2980b9;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1em;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #3498db;
  }
`;

function Navigation() {
  const location = useLocation();

  // Find the index of the current route
  const currentIndex = routes.findIndex(route => route.path === location.pathname);

  // Determine the previous and next routes
  const prevRoute = routes[currentIndex - 1];
  const nextRoute = routes[currentIndex + 1];

  return (
    <NavContainer>
      {prevRoute && (
        <NavButton
          to={prevRoute.path}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Précédent
        </NavButton>
      )}
      {nextRoute && (
        <NavButton
          to={nextRoute.path}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Suivant
        </NavButton>
      )}
    </NavContainer>
  );
}

export default Navigation;
