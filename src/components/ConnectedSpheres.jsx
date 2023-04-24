import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Vector3 } from 'three';

import randomInt from '../helpers/randomInt';
import ChainMaterial from './materials/ChainMaterial';
import NextSphere from './NextSphere';



function ConnectedSpheres({
  realizedHSL=[0.5, 1, 0.5],
  addChain,
  destroySelf,
  nodeCount=11,
  drawTime,
  keyId
  // startingZ=5
}) {

  console.log("ConnectedSphere render ", keyId)
  // console.log(nodeCount, drawTime, nodeCount * drawTime)

  // state to wait for sphere to load before passing position to child
  const [safeForRender, setSafeForRender] = useState(false);
  // const [z, setZ] = useState(-50);
  const z = useRef();

  // sphere ref to access position to pass to children
  const group = useRef();
  const sphere = useRef();

  const color = new Color
  color.setHSL(...realizedHSL);

  const position = new Vector3;
  position.set(randomInt(-3,3), z.value, randomInt(-5,5))


  // setTimeout to add chain
  useEffect(() => {
    console.log("Establishing set timeout")
    const addTimeout = setTimeout(() => {
      console.log("Should add a chain from ", keyId)
      addChain();
    }, ((nodeCount * drawTime) + 2000))

    return () => clearTimeout(addTimeout);

  }, []);

  // setTimeout to destroy chain
  useEffect(() => {
    const destroyTimeout = setTimeout(() => {
      console.log("Should delete chain ", keyId)
      // destroySelf(keyId);
    }, ((nodeCount * drawTime) + 4000))

    return () => clearTimeout(destroyTimeout);

  }, [])

  // useFrame(({camera})=>{
  //   if (!safeForChild) {
  //     if (sphere?.current?.position) {
  //       group.current.rotation.x = Math.PI/2;
  //       sphere.current.material.color.setHSL(...realizedHSL)
  //       sphere.current.position.z = (camera.position.z+40);
  //       setSafeForChild(true);
  //     }
  //   }
  // })

  useFrame(({camera}) => {
    if (safeForRender) {
      group.current.rotation.x = Math.PI/2;
      // position.set(randomInt(-3,3),randomInt(-3,3), z.value)
    }
    if (!safeForRender) {
      z.value = camera.position.z + 40;
      // position.set(randomInt(-3,3),randomInt(-3,3), z.value)
      // sphere.current.material.color.setHSL(...realizedHSL);
      setSafeForRender(true);
    }
    
  })

  // render
  return(
    (safeForRender && 
    <group ref={group}>
      <mesh 
        ref={sphere} 
        // position={[randomInt(-3,3),randomInt(-3,3), z.value]}
        position={position}
      >
        <sphereGeometry />
        {/* <ChainMaterial 
          color={color}
        /> */}
        <meshPhysicalMaterial 
          reflectivity={1.0}
          metalness={1.0}
          clearcoat={1.0}
          clearcoatRoughness={0.5}
          color={color}
          // color={"rgb(128, 128, 128)"}
        />
      </mesh>
      {/* {sphere?.current?.position &&  */}
        <NextSphere 
          lastPosition={position} 
          remaining={nodeCount - 1}
          drawTime={drawTime} 
          realizedHSL={realizedHSL}
        />
      {/* } */}
    </group>)
  )
}




export default ConnectedSpheres;