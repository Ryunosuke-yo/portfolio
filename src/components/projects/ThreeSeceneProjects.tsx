import { useLoader } from '@react-three/fiber'
import { Suspense, useContext, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { MediaContext } from '../../App';
const GroupObj = ()=>{
    const rocket = useLoader(GLTFLoader, "/3dObj/rocket/scene.gltf")
    const cloud1 = useLoader(GLTFLoader, "/3dObj/cloud/scene.gltf")
    const cloud2 = useLoader(GLTFLoader, "/3dObj/cloud2/scene.gltf")
    const astro = useLoader(GLTFLoader, "/3dObj/astr/scene.gltf")

    const groupRef = useRef<any>()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        groupRef.current.rotation.y = time;
      });
    return(
        <group ref={groupRef}>
            <primitive object={rocket.scene} rotation={[0,-7.87,0]} scale={2}/>
            <primitive object={cloud1.scene} scale={0.2} position={[-1,1,-1]}/>
            <primitive object={cloud2.scene} scale={0.2} position={[1,-0.5,-0.9]}/>
            <primitive object={astro.scene} scale={0.06} position={[1.5,-1.5,0.5]} rotation={[0, -2,0 ]}/>
        </group>
    )
}


export default function(){

  const {isDesktop}= useContext(MediaContext)
  

    return (
        <Canvas>
            <Suspense fallback={null}>
              <GroupObj />
            </Suspense>
            {isDesktop &&  <OrbitControls />}
          <Environment files="/hdri/studio.hdr" background={false} />
        </Canvas>
    )
}