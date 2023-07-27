import { Environment, OrbitControls, Sky, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import ReactPlayer from "react-player";
import { useControls } from "leva";
import { Html } from "@react-three/drei";

import MyModel from "./MyModel";
import Lamborghini from "./Lamborghini";
import CanhModel from "./CanhModel";
import Computer from "./Computer";
import VyModel from "./VyModel";
import Micro from "./Micro";

export const Show = () => {
    const texture = useTexture("textures/bg1.jpg");
    const viewport = useThree((state) => state.viewport);
    const { show } = useControls({
        show: {
            value: "wait",
            options: ["wait", "show"],
        },
    });

    return (
        <>
            <group position-y={1.2} position-x={0.5} position-z={-0.85}>
                <Html>
                    <h4 style={{ color: "#ab208e" }}>Bé Momo</h4>
                </Html>
            </group>
            <group position-y={1.2} position-x={2.5} position-z={2}>
                <Html>
                    <h4 style={{ color: "yellow" }}>BE</h4>
                </Html>
            </group>
            <group position-y={1.2} position-x={-3} position-z={1}>
                <Html>
                    <h4 style={{ color: "red" }}>Thiến Dùm</h4>
                </Html>
            </group>
            <Html>
                <ReactPlayer
                    url="music/ALoi.mp3"
                    autoPlay={true}
                    playing={show === "show" ? true : false}
                    loop
                />
                <h1>TEST</h1>
            </Html>
            <OrbitControls />
            <Sky />
            <Environment preset="sunset" />
            <group position-y={-1} position-x={-2} position-z={1}>
                <MyModel show={show} />
            </group>
            <group position-y={-0.9} position-x={0} position-z={-0.85}>
                <VyModel show={show} />
            </group>
            <group position-y={-1} position-x={2} position-z={2}>
                <CanhModel show={show} />
            </group>
            <group position-y={-1} position-x={-2} position-z={1.5}>
                <Micro />
            </group>
            <group position-y={-0.8} position-x={-0.2} position-z={0}>
                <Computer />
            </group>
            <group position-y={-1} position-x={5} position-z={1}>
                <Lamborghini />
            </group>
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
