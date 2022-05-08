import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

export default function(){
    const rocket = useLoader(GLTFLoader, "./assets/rocket/scene.gltf")
    return (
        <Canvas>
            <Suspense fallback={null}>
                <primitive object={rocket.scene} />
            </Suspense>

            <OrbitControls />
          <Environment files="./assets/hdri/back.hdr" background={false} />
        </Canvas>
    )
}