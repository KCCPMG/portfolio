import { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

import randomInt from '../helpers/randomInt';
import ChainMaterial from './materials/ChainMaterial';
import NextSphere from './NextSphere';



function ConnectedSpheres({
  realizedHSL=[0.5, 1, 0.5],
  // startingZ=5
}) {

  // state to wait for sphere to load before passing position to child
  const [safeForChild, setSafeForChild] = useState(false);
  const [z, setZ] = useState(-50);

  // sphere ref to access position to pass to children
  const group = useRef();
  const sphere = useRef();

  useFrame(({camera})=>{
    if (!safeForChild) {
      if (sphere?.current?.position) {
        group.current.rotation.x = Math.PI/2;
        sphere.current.material.color.setHSL(...realizedHSL)
        sphere.current.position.z = (camera.position.z+40);
        setSafeForChild(true);
      }
    }
  })

  // render
  return(
    <group ref={group}>
      <mesh 
        ref={sphere} 
        position={[randomInt(-3,3),randomInt(-3,3), z]}
      >
        <sphereGeometry />
        <ChainMaterial />
      </mesh>
      {sphere?.current?.position && 
        <NextSphere 
          lastPosition={sphere.current.position} 
          remaining={10}
          drawTime={500} 
          realizedHSL={realizedHSL}
        />
      }
    </group>
  )
}




export default ConnectedSpheres;