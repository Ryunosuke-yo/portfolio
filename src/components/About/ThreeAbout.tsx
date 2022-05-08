import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

export default function(){
    const roboto = useLoader(GLTFLoader, "./assets/robot/scene.gltf")
    const pixelPig = useLoader(GLTFLoader, "./assets/PixelPig/scene.gltf")
    return (
        <Canvas>
            <Suspense fallback={null}>
                <primitive object={roboto.scene} />
                <primitive object={pixelPig.scene} />
            </Suspense>

            <OrbitControls />
          <Environment files="./assets/hdri/back.hdr" background={false} />
        </Canvas>
    )
}