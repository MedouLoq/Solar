// src/components/Conclusion.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ClosingText = styled(motion.h2)`
  font-size: 3.5em;
  color: #e67e22;
  text-align: center;
  margin-top: 200px;
`;

const Subtitle = styled.p`
  font-size: 1.8em;
  color: #34495e;
  text-align: center;
`;

function Conclusion() {
    useEffect(() => {
        document.title = 'Conclusion';
    }, []);

    return (
        <>
            <ClosingText
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            >
                Merci pour votre attention!
            </ClosingText>
            <Subtitle>N'hésitez pas à poser des questions.</Subtitle>
        </>
    );
}

export default Conclusion;
