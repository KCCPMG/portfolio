import { useRef, useState, useEffect, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Vector3 } from 'three';

import randomInt from '../helpers/randomInt';
import ChainMaterial from './materials/ChainMaterial';
import NextSphere from './NextSphere';



const ConnectedSpheres = memo(function ConnectedSpheres(props) {

  const {
    hue,
    saturation,
    lightness,
    minNodes,
    maxNodes,
    drawTime,
    keyId
  } = props;


  // state to wait for sphere to load before passing position to child
  const [safeForRender, setSafeForRender] = useState(false);
  const [nodeCount, setNodeCount] = useState(randomInt(minNodes, maxNodes))


  // const [z, setZ] = useState(-50);
  const z = useRef();

  // sphere ref to access position to pass to children
  const group = useRef();
  const sphere = useRef();

  const realizedHSL = [hue, saturation, lightness]
  const color = new Color;
  color.setHSL(...realizedHSL);

  const position = new Vector3;
  position.set(randomInt(-3,3), z.value, randomInt(-5,5))

  const prevProps = useRef();
  const didMountRef = useRef(false);
  // catch changes to props
  useEffect(() => {
    if (didMountRef.current) {
      console.log(`PROPS CHANGE ON ${keyId}`);
      console.log({prevProps: prevProps.current});
      console.log({props})

      prevProps.current = props;
    } else {
      didMountRef.current = true;
      
      prevProps.current = props;
    }
  }, [props])


  // setTimeout to add chain
  useEffect(() => {
    // console.log("Establishing set timeout")
    const addTimeout = setTimeout(() => {
      // console.log("Should add a chain from ", keyId)
      // addChain();
    }, ((nodeCount * drawTime) + 2000))

    return () => clearTimeout(addTimeout);

  }, []);

  // setTimeout to destroy chain
  // useEffect(() => {
  //   const destroyTimeout = setTimeout(() => {
  //     console.log("Should delete chain ", keyId)
  //     // destroySelf(keyId);
  //   }, ((nodeCount * drawTime) + 4000))

  //   return () => clearTimeout(destroyTimeout);

  // }, [])

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
})

export default ConnectedSpheres;