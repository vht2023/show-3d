import { Environment, OrbitControls, Sky, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import MyModel from "./MyModel";
import Lamborghini from "./Lamborghini";
import CanhModel from "./CanhModel";

export const Show = () => {
    const texture = useTexture("textures/bg1.jpg");
    const viewport = useThree((state) => state.viewport);
    return (
        <>
            <OrbitControls />
            <Sky />
            <Environment preset="sunset" />
            <group position-y={-1} position-x={-2} position-z={1}>
                <MyModel />
            </group>
            <group position-y={-1} position-x={0} position-z={-1}>
                <CanhModel />
            </group>
            <group position-y={-1} position-x={3} position-z={1}>
                <Lamborghini />
            </group>
            <mesh scale={[0.5, 1, 0.5]} position-y={-1} position-z={-1}>
                <boxGeometry />
                <meshStandardMaterial color="#a5a5a5" />
            </mesh>
            <mesh scale={[18.2, 0.5, 7]} position-y={-1.25} position-z={1}>
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position-z={-2.5} position-y={3}>
                <planeGeometry args={[viewport.width, viewport.height]} />
                <meshBasicMaterial map={texture} />
            </mesh>
            <ambientLight intensity={1} />
        </>
    );
};
