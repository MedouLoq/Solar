// src/components/Benefits.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Leaf, Zap, DollarSign, Smile } from 'lucide-react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
`;

const BenefitItem = styled.li`
  font-size: 1.8em;
  margin: 40px 0;
  color: #27ae60;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  margin-right: 15px;
`;

function Benefits() {
    useEffect(() => {
        document.title = 'Avantages Clés';
    }, []);

    const benefits = [
        { icon: <Leaf size={40} color="#2ecc71" />, text: 'Éco-responsable' },
        { icon: <Zap size={40} color="#2ecc71" />, text: 'Indépendance Énergétique' },
        { icon: <DollarSign size={40} color="#2ecc71" />, text: 'Économies à Long Terme' },
        { icon: <Smile size={40} color="#2ecc71" />, text: 'Facilité d\'Utilisation' },
    ];

    return (
        <Parallax pages={2}>
            <ParallaxLayer offset={0} speed={0.5}>
                <div style={{ backgroundImage: 'url(/assets/images/benefits_background.jpg)', backgroundSize: 'cover', height: '100vh' }}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <h2 style={{ textAlign: 'center', marginTop: '100px', color: '#fff' }}>Avantages Clés</h2>
                <BenefitsList>
                    {benefits.map((benefit, index) => (
                        <BenefitItem key={index}>
                            <Icon>{benefit.icon}</Icon>
                            {benefit.text}
                        </BenefitItem>
                    ))}
                </BenefitsList>
            </ParallaxLayer>
        </Parallax>
    );
}

export default Benefits;
