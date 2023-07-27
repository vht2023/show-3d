/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/micro.glb 
Author: Burst Traffic Design (https://sketchfab.com/bursttraffic_des)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-microphone-90c26d29a3124fa8bfd1456d2d63507c
Title: Old Microphone
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Micro(props) {
    const { nodes, materials } = useGLTF("models/micro.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation-y={Math.PI / 2} scale={0.01}>
                <group
                    position={[0.661, 118.755, 0.097]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.697, 1, 1.296]}
                >
                    <mesh
                        geometry={
                            nodes["ChamferBox001_Material_#91_0"].geometry
                        }
                        material={materials.Material_91}
                    />
                    <mesh
                        geometry={nodes.ChamferBox001_MicroGrid_0.geometry}
                        material={materials.MicroGrid}
                    />
                    <mesh
                        geometry={nodes.ChamferBox001_BlackButton_0.geometry}
                        material={materials.BlackButton}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/micro.glb");
