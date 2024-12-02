// src/components/HowItWorks/HowItWorks.js
import React from 'react';
import styled from 'styled-components';
import Slides from './Slides';
import { motion } from 'framer-motion';

const PageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function HowItWorks() {
    return (
        <PageContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Slides />
        </PageContainer>
    );
}

export default HowItWorks;
