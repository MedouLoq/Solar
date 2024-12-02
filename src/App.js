// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import routes from './routes';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <AnimatedRoutes />
        <Navigation />
      </Router>
    </>
  );
}

export default App;
