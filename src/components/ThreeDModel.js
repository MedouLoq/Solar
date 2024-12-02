// src/components/ThreeDModel.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

function Model({ modelPath, scale = 1.5 }) {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={scale} />;
}

function ThreeDModel({ modelPath }) {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={<Html>Loading...</Html>}>
                <Model modelPath={modelPath} />
            </Suspense>
            <OrbitControls enableZoom={true} />
        </Canvas>
    );
}

export default ThreeDModel;
