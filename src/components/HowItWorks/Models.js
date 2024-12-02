// src/components/HowItWorks/Model.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styled from 'styled-components';

const ModelContainer = styled.div`
  width: 100%;
  height: 400px;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

function SolarACModel() {
    const { scene } = useGLTF('/base.glb'); // Ensure the path is correct and the model exists

    return <primitive object={scene} dispose={null} />;
}

function Model() {
    return (
        <ModelContainer>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <SolarACModel />
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
            </Canvas>
        </ModelContainer>
    );
}

export default Model;
