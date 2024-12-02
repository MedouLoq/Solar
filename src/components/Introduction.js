import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaSun } from 'react-icons/fa';
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaBatteryFull, FaWind } from 'react-icons/fa';
// Styled Components

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 60px;
  min-height: 100vh; /* Full viewport height */
  background: linear-gradient(135deg, #1e1e1e 0%, #141414 100%);
  color: var(--color-text);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 30px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const Header = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-xxlarge);
  color: var(--color-primary); /* Orange for emphasis */
  font-family: var(--font-primary);

  @media (max-width: 768px) {
    font-size: var(--font-size-xlarge);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: var(--font-size-large);
  color: var(--color-muted);
  max-width: 600px;
  margin-bottom: 30px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: var(--font-size-medium);
    text-align: center;
  }
`;

const Description = styled(motion.div)`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DescriptionItem = styled(motion.div)`
  background-color: var(--color-dark);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: translateY(-5px);
    background-color: var(--color-hover);
  }
`;

const DescriptionTitle = styled.h3`
  font-size: var(--font-size-large);
  color: var(--color-primary);
  margin-bottom: 8px;
  font-family: var(--font-primary);
`;

const DescriptionText = styled.p`
  font-size: var(--font-size-small);
  color: var(--color-text);
  line-height: 1.4;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 12px 25px;
  background-color: var(--color-primary);
  color: var(--color-text);
  border: none;
  border-radius: 30px;
  font-size: var(--font-size-medium);
  cursor: pointer;
  font-family: var(--font-primary);
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: var(--color-secondary);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};
// Icon Grid Styling
const IconGrid = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  gap: 30px; /* Adjusted gap */
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// Individual Icon Item
const IconItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px; /* Adjusted max-width */
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px); /* Subtle hover effect */
  }
`;

// Icon Wrapper Styling
const IconWrapper = styled.div`
  background-color: var(--color-dark);
  border-radius: 50%;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: background-color var(--transition-duration) var(--transition-ease);

  ${IconItem}:hover & {
    background-color: var(--color-hover);
  }
`;

// Icon Text Styling
const IconText = styled.p`
  font-size: var(--font-size-small);
  color: var(--color-text);
  font-weight: 500;
`;

// Introduction Component
function Introduction() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const descriptionCards = [
        {
            title: 'Technologie Avancée',
            text: 'Notre climatiseur utilise des panneaux solaires de dernière génération pour assurer une performance optimale même dans des conditions de faible luminosité.',
        },
        {
            title: 'Portable et Compact',
            text: 'Conçu pour être facilement transportable, il peut être utilisé à l’intérieur comme à l’extérieur, offrant une flexibilité maximale.',
        },
        {
            title: 'Économies Énergétiques',
            text: 'Réduisez vos factures d\'électricité grâce à une consommation d\'énergie minimisée tout en profitant d\'un confort de refroidissement supérieur.',
        },
    ];

    // Handle Next Key Press
    const handleKeyPress = (event) => {
        if (event.key === 'ArrowRight' && currentIndex < descriptionCards.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    // Attach Key Listener
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentIndex]);

    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
        >
            <ParticlesBg type="circle" bg={true} />

            {/* Left Column */}
            <LeftColumn>
                {/* Header with Icon and Title */}
                <Header variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                        <FaSun size={40} color="var(--color-primary)" aria-label="Sun Icon" />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Title>Pourquoi un Climatiseur Solaire?</Title>
                    </motion.div>
                </Header>

                {/* Icon Grid */}
                <IconGrid
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        { icon: <FaGlobeAmericas size={48} color="var(--color-primary)" />, text: 'Écologique' },
                        { icon: <FaBatteryFull size={48} color="var(--color-primary)" />, text: 'Énergie Renouvelable' },
                        { icon: <FaWind size={48} color="var(--color-primary)" />, text: 'Efficacité Énergétique' },
                    ].map((item, index) => (
                        <IconItem key={index} variants={itemVariants}>
                            <IconWrapper>
                                {item.icon}
                            </IconWrapper>
                            <IconText>{item.text}</IconText>
                        </IconItem>
                    ))}
                </IconGrid>
            </LeftColumn>

            {/* Right Column */}
            <RightColumn>
                <Subtitle>
                    Réduire l'empreinte carbone tout en restant au frais. Découvrez les avantages écologiques et économiques de notre climatiseur solaire portable, une solution innovante pour un avenir plus vert.
                </Subtitle>

                <Description
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {descriptionCards.map((card, index) => (
                        <DescriptionItem
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate={index === currentIndex ? 'visible' : 'hidden'}
                        >
                            <DescriptionTitle>{card.title}</DescriptionTitle>
                            <DescriptionText>{card.text}</DescriptionText>
                        </DescriptionItem>
                    ))}
                </Description>

                
            </RightColumn>
        </Container>
    );
}

export default Introduction;
