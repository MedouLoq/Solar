// src/components/FutureDevelopment.js
import React, { Suspense, useEffect } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

function IoTModel() {
    const { scene } = useGLTF('/models/solar_ac_iot.glb');
    return <primitive object={scene} scale={1.5} />;
}

function FutureDevelopment() {
    useEffect(() => {
        document.title = 'Développement Futur';
    }, []);

    return (
        <Container>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                Développement Futur
            </h2>
            <p style={{ textAlign: 'center' }}>
                Intégration de technologies IoT pour une efficacité optimale.
            </p>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[0, 10, 5]} />
                <Suspense fallback={<Html>Chargement...</Html>}>
                    <IoTModel />
                </Suspense>
            </Canvas>
        </Container>
    );
}

export default FutureDevelopment;
