import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Composer } from './Composer';

export default function App() {    

    return (
        <Canvas>
            <Environment files={'./dusk.hdr'} background />
            <OrbitControls />
            <Composer />
        </Canvas>
    );
}