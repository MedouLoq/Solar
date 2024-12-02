// src/components/Benefits/Slide.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SlideContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px; 
  min-height: 100vh;
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const SlideTitle = styled.h2`
  font-size: 2em;
  color: var(--color-primary);
  margin-bottom: 20px;
  text-align: center;
  font-family: var(--font-primary);
  
  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const SlideContent = styled.p`
  font-size: 1em;
  color: var(--color-muted);
  max-width: 800px;
  text-align: center;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

function Slide({ title, content, children }) {
    return (
        <SlideContainer
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <SlideTitle>{title}</SlideTitle>
            <SlideContent>{content}</SlideContent>
            {children}
        </SlideContainer>
    );
}

export default Slide;
