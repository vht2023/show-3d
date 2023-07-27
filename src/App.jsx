import { Canvas } from "@react-three/fiber";
import { Show } from "./components/Show";

function App() {

    return (
        <>
            <Canvas shadows camera={{ position: [1, 3, 15], fov: 30 }}>
                <color attach="background" args={["#ececec"]} />
                <Show />
            </Canvas>
        </>
    );
}

export default App;
