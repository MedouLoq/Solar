// src/components/Benefits/Slides.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import { AnimatePresence } from 'framer-motion';
import { FaLeaf, FaBolt, FaHeart, FaRecycle } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const slidesData = [
    {
        title: 'Écologique',
        content: 'Notre climatiseur utilise une énergie propre, réduisant l\'empreinte carbone et favorisant un environnement sain.',
        icon: <FaLeaf size={60} color="#27ae60" />, // Leaf icon
    },
    {
        title: 'Économique',
        content: 'Réduction des coûts énergétiques grâce à l\'utilisation de l\'énergie solaire, offrant une solution rentable à long terme.',
        icon: <FaBolt size={60} color="#f39c12" />, // Bolt icon
    },
    {
        title: 'Confort Optimal',
        content: 'Fournit une fraîcheur constante et personnalisée, améliorant le confort des utilisateurs dans divers environnements.',
        icon: <FaHeart size={60} color="#e74c3c" />, // Heart icon
    },
    {
        title: 'Durabilité',
        content: 'Conçu pour durer avec des matériaux de haute qualité, assurant une performance fiable sur le long terme.',
        chart: (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={[
                            { name: 'Matériaux Écologiques', value: 40 },
                            { name: 'Technologie Durable', value: 60 },
                        ]}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                    >
                        <Cell fill="#27ae60" />
                        <Cell fill="#2980b9" />
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        ),
    },
    // Add more slides as needed
];

const SlidesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    background-color: #eafaf1; /* Light green background */
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
        background-color: #27ae60; /* Green for ecology */
        color: #fff;
        border: none;
        border-radius: 50%; /* Make buttons circular */
        cursor: pointer;
        font-size: 1.5em;
        transition: background-color 0.3s, transform 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;

        &:hover {
            background-color: #1e8449;
            transform: translateY(-3px);
        }

        &:disabled {
            background-color: #d6d6d6;
            cursor: not-allowed;
        }
    }
`;

const COLORS = ['#27ae60', '#2980b9', '#f39c12', '#e74c3c'];

function BenefitsSlides() {
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
                    key={`benefits-slide${currentSlide}`}
                    title={slidesData[currentSlide].title}
                    content={slidesData[currentSlide].content}
                >
                    {slidesData[currentSlide].icon || slidesData[currentSlide].chart}
                </Slide>
            </AnimatePresence>
            <NavButtons>
                <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Précédent"
                >
                    <FaArrowLeft />
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Suivant"
                >
                    <FaArrowRight />
                </button>
            </NavButtons>
        </SlidesContainer>
    );
}

export default BenefitsSlides;
