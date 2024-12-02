import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import Model from './Models';
import { AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slidesData = [
    {
        title: 'Étape 1: Collecte de l\'Énergie Solaire',
        content: 'Les panneaux solaires intégrés captent l\'énergie du soleil, la convertissant en électricité pour alimenter le climatiseur.',
        image: <Model />,
    },
    {
        title: 'Étape 2: Conversion de l\'Énergie',
        content: 'L\'énergie solaire est convertie en courant continu, alimentant ainsi les composants internes du climatiseur pour un refroidissement efficace.',
        image: null,
    },
    {
        title: 'Étape 3: Refroidissement Portable',
        content: 'Grâce à son design compact et léger, le climatiseur solaire portable peut être déplacé facilement pour refroidir n\'importe quel espace.',
        image: null,
    },
];
const SlidesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    background-color: #f0f4f8; /* Light background */
    color: #333; /* Darker text */
`;

const NavButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    margin-top: 20px;

    button {
        padding: 12px;
        background-color: #007bff; /* Bright blue */
        color: #fff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5em;
        transition: background-color 0.3s, transform 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;

        &:hover {
            background-color: #0056b3;
            transform: translateY(-3px);
        }

        &:disabled {
            background-color: #d6d6d6;
            cursor: not-allowed;
        }
    }
`;


function Slides() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') handleNext();
            if (event.key === 'ArrowLeft') handlePrev();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentSlide]);

    return (
        <SlidesContainer>
            <AnimatePresence mode="wait">
                <Slide
                    key={`slide${currentSlide}`}
                    title={slidesData[currentSlide].title}
                    content={slidesData[currentSlide].content}
                >
                    {slidesData[currentSlide].image}
                </Slide>
            </AnimatePresence>
            <NavButtons>
                <button onClick={handlePrev} aria-label="Précédent">
                    <FaArrowLeft />
                </button>
                <button onClick={handleNext} aria-label="Suivant">
                    <FaArrowRight />
                </button>
            </NavButtons>
        </SlidesContainer>
    );
}

export default Slides;
