import { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls } from '@react-three/drei'
import randomInt from '../helpers/randomInt';


function ConnectedSpheres() {

  const [safeForChild, setSafeForChild] = useState(false);

  const masterRef = useRef();

  const sphere1 = useRef();
  const sphere2 = useRef();
  const cylinder = useRef();

  const randomDirectionInt = useRef(0);

  const randomRotate = {
    1: (()=>{masterRef.current.rotation.x+=0.002}),
    2: (()=>{masterRef.current.rotation.x-=0.002}),
    3: (()=>{masterRef.current.rotation.y+=0.002}),
    4: (()=>{masterRef.current.rotation.y-=0.002}),
    5: (()=>{masterRef.current.rotation.z+=0.002}),
    6: (()=>{masterRef.current.rotation.z-=0.002}),
  }

  useThree(()=>{
    setTimeout(() => {
      console.log(cylinder);
      console.log(masterRef);
    },1000)

    // // reset rotation direction every half second
    // const changeDirection = setInterval(() => {
    //   randomDirectionInt.current = randomInt(1,6);
    // }, 500)
    // setTimeout(() => {
    //   clearInterval(changeDirection);
    // }, 3500)
  })

  useFrame(()=>{

    if (!safeForChild) {
      if (sphere2?.current?.position) {
        console.log(sphere2.current.position);
        setSafeForChild(true);
      }
    }

    if (cylinder.current.scale.y < 10) {
      if (randomDirectionInt.current > 0) {
        randomRotate[randomDirectionInt.current]();
      }
      cylinder.current.scale.y += 0.01;
      cylinder.current.position.y +=0.005;
    }
  })

  return(
    <group ref={masterRef}>
      <OrbitControls />
      <mesh 
        ref={sphere1} 
        position={[0,-5,5]}
      >
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh 
        ref={cylinder} 
        position={[0,-5,5]}
        scale={[0.5,0.1,0.5]}
      >
        <cylinderGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh 
        ref={sphere2} 
        position={[0,5,5]}
      >
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      {sphere2?.current?.position && <NextSphere 
        lastPosition={sphere2.current.position} 
        remaining={3} 
      />}
    </group>
  )
}


function NextSphere({lastPosition, remaining, drawTime=3000}) {

  // state
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
  const startTime = performance.now();

  console.log({lastPosition, distance, destination, direction});

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

    const timeElapsed = performance.now() - startTime;
    let currentScalar = Math.min(1, (timeElapsed / drawTime))

    // set scale
    cylinderRef.current.scale.y = distance * currentScalar;


    const newMidpoint = lastPosition.clone().add(
      direction.clone().multiplyScalar(0.5 * currentScalar)
    )

    if (currentScalar < 1) {
      console.log({lastPosition, currentScalar, direction, destination, newMidpoint})
    }

    // set position
    cylinderRef.current.position.copy(newMidpoint);

    /** 
    if (cylinderRef.current.scale.y < 10) {
      // cylinderRef.current.scale.y += 0.01;
      // cylinderRef.current.position.y +=0.005;
      cylinderRef.current.position.copy(
        lastPosition
        .clone()
        .add(
          direction
          .clone()
          .multiplyScalar(0.5)
        )
      )
    }
    */
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
      {((remaining > 0) && sphereRef?.current?.position) && <NextSphere 
        lastPosition={sphereRef.current.position} 
        remaining={remaining-1}
      />}
    </group>
  )
}

export default ConnectedSpheres;