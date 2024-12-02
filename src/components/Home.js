// src/components/Home.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import videoBg from '../styles/Solar_animation.mp4';
import { Link } from 'react-router-dom';
import Particles from 'particles-bg';
import { loadFull } from 'tsparticles';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -3;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.5);
  z-index: -2;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-size: 3em;
  color: #e74c3c;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    font-size: 4em;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5em;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const CTAButton = styled(motion(Link))`
  padding: 15px 30px;
  font-size: 1em;
  background-color: #2980b9;
  color: #fff;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #3498db;
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 20px;
`;

const IconLink = styled.a`
  color: #ffffff;
  transition: color 0.3s;
  
  &:hover {
    color: #e74c3c;
  }
`;

function Home() {
    useEffect(() => {
        document.title = 'Climatiseur Solaire Portable';
    }, []);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <HomeContainer>
            <VideoBackground autoPlay loop muted src={videoBg} />
            <Overlay />
            
            <Content>
                <Title
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Climatiseur Solaire Portable
                </Title>
                <Subtitle
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    L'avenir du refroidissement écologique
                </Subtitle>
                <CTAButton
                    to="/introduction"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    En savoir plus
                </CTAButton>
            </Content>
         
        </HomeContainer>
    );
}

export default Home;
