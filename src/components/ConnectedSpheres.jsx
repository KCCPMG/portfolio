import { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import randomInt from '../helpers/randomInt';


function ConnectedSpheres() {

  // state to wait for sphere to load before passing position to child
  const [safeForChild, setSafeForChild] = useState(false);

  // sphere ref to access position to pass to children
  const sphere = useRef();

  useFrame(()=>{
    if (!safeForChild) {
      if (sphere?.current?.position) {
        setSafeForChild(true);
      }
    }
  })

  // render
  return(
    <group>
      <mesh 
        ref={sphere} 
        position={[0,-5,5]}
      >
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      {sphere?.current?.position && 
        <NextSphere 
          lastPosition={sphere.current.position} 
          remaining={3}
          drawTime={500} 
        />
      }
    </group>
  )
}


function NextSphere({
  lastPosition, 
  remaining, 
  sequenceIndex=0, 
  drawTime=3000, 
  realizedHSL=[0.5, 1, 0.5]
}) {

  // state to wait for sphere to load before passing position to child
  const [safeForChild, setSafeForChild] = useState(false);
  
  // refs
  const cylinderRef = useRef();
  const sphereRef = useRef();
  const groupRef = useRef();

  // constants
  const destinationCoords = [
    lastPosition.x + randomInt(-2,2), 
    lastPosition.y + 10, 
    lastPosition.z + randomInt(-2,2)
  ]
  const destination = new Vector3(...destinationCoords);
  const distance = lastPosition.distanceTo(destination);
  const direction = destination.clone().sub(lastPosition.clone());
  const startTime = performance.now() + (sequenceIndex * drawTime);
  // const beginDrawing = ;


  // render child safely
  useFrame(() => {
    if (!safeForChild) {
      if (sphereRef?.current?.position) {
        setSafeForChild(true);
      }
    }
  });


  // set position and scale of column
  useFrame(() => {

    const timeElapsed = Math.max(0, performance.now() - startTime);
    let currentScalar = Math.min(1, (timeElapsed / drawTime))

    // set scale
    cylinderRef.current.scale.y = distance * currentScalar;

    const newMidpoint = lastPosition.clone().add(
      direction.clone().multiplyScalar(0.5 * currentScalar)
    )

    // set position
    cylinderRef.current.position.copy(newMidpoint);

    // set orientation
    cylinderRef.current.quaternion.setFromUnitVectors(
      new Vector3(0,1,0), direction.clone().normalize()
    );

    // set visibility & color
    sphereRef.current.material.color.setHSL(
      realizedHSL[0],
      realizedHSL[1],
      realizedHSL[2]*currentScalar 
    )

    cylinderRef.current.material.color.setHSL(...realizedHSL);

  })

  return (
    <group ref={groupRef}>
      <mesh 
        ref={cylinderRef} 
        position={[lastPosition.x, lastPosition.y, lastPosition.z]}
        scale={[0.5,0.1,0.5]}
      >
        <cylinderGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh 
        ref={sphereRef} 
        position={destination}
      >
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      {((remaining > 0) && sphereRef?.current?.position) && 
        <NextSphere 
          lastPosition={sphereRef.current.position} 
          remaining={remaining-1}
          sequenceIndex={sequenceIndex+1}
          drawTime={drawTime}
          realizedHSL={realizedHSL}
        />
      }
    </group>
  )
}

export default ConnectedSpheres;