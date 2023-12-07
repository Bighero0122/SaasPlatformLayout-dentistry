import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, React } from "react";
import {
    CameraControls,
    useFBX,
} from '@react-three/drei';
import * as THREE from 'three';
import { useSnapshot } from "valtio";
import { state } from "../../../store";
import { WheelPanel } from "../WheelPanel/WheelPanel";
import { LayerPanel } from "../LayerPanel/LayerPanel";
import { ViewPanel } from "../ViewPanel/ViewPanel";

const DEG45 = Math.PI / 2;

const Scene = () => {
    const snap = useSnapshot(state);
    const fbx = useFBX('/SimpleFace.fbx');
    if (fbx) {
        const newMaterial = new THREE.MeshLambertMaterial({ color: 0xc2c2c2 });
        fbx.traverse((child) => {
            if (child.name == "Bone_jaw") {
                child.rotation.set(0, 0, snap.open ? -2.73 : -2.13);
            }
            if (child.isMesh) {
                child.material = newMaterial;
                child.castShadow = true;
            }
        })
    }
    return <primitive object={fbx} scale={0.1} />
};

export const ModelPanel = () => {
    const cameraControlRef = useRef();
    const rotate_face_right = () => {
        cameraControlRef.current?.reset(true);
        cameraControlRef.current?.rotate(-DEG45, 0, true);
    }
    const rotate_face_left = () => {
        cameraControlRef.current?.reset(true);
        cameraControlRef.current?.rotate(DEG45, 0, true);
    }
    const rotate_face_reset = () => {
        cameraControlRef.current?.reset(true);
    }
    const [isPanelSlider, setPanelSlider] = useState('true') ;
    return (
        <>
            <Canvas
                id="area"
                eventSource={document.getElementById("area")}
                shadows
                gl={{ preserveDrawingBuffer: true }}
                eventPrefix="client"
                camera={{ position: [0, 0, 5], fov: 60 }}
            >
                <Suspense fallback={null}>
                    <CameraControls ref={cameraControlRef} />
                    <ambientLight intensity={2} />
                    <directionalLight
                        intensity={4}
                        position={[3, 2, 5]}
                        color="lightblue"
                    />
                    <directionalLight
                        intensity={2}
                        position={[-3, -1, 3]}
                        color="pink"
                    />
                    <Scene />
                </Suspense>             
            </Canvas>
            <LayerPanel 
                isPanelSlider={isPanelSlider}
                setPanelSlider={setPanelSlider}
            />
            <ViewPanel />
            <WheelPanel rotateLeft={rotate_face_left} rotateRight={rotate_face_right} rotateReset={rotate_face_reset} />
        </>
    );
};