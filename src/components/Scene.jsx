import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useState, useRef, useEffect, useCallback, memo} from 'react';
import { OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three';

import randomInt from '../helpers/randomInt';
import CameraMove from './CameraMove';
import ConnectedSpheres from './ConnectedSpheres';


const keyGenerator = function*(){
	let i=1;
	while (true) yield i++;
}();


function Scene() {

  const [chains, setChains] = useState([0])
  
  const hue=0.556;
  const saturation=0.72;
  const lightness=0.47;
  const minNodes=4;
  const maxNodes=15;

  // console.log(chains);

  // const addChain = useCallback(() => {
  //   let keyId = keyGenerator.next().value;
  //   console.log("adding chain ", keyId);
  //   let chainsCopy = [...chains];
  //   console.log(chainsCopy);
  //   // console.log(chainsCopy.length);
  //   if (chainsCopy.length > 5) {
  //     chainsCopy.shift();
  //   }
  //   // console.log(chainsCopy.length);
  //   setChains([...chainsCopy, keyId])
  // })


  const addChain = () => {
    let keyId = keyGenerator.next().value;
    // console.log("adding chain ", keyId);
    let chainsCopy = [...chains];
    // console.log(chainsCopy);
    // console.log(chainsCopy.length);
    if (chainsCopy.length > 5) {
      // chainsCopy.shift();
      chainsCopy.splice(chainsCopy.indexOf(Math.min(...chainsCopy)), 1, keyId);
      setChains(chainsCopy);
    } else {

      setChains([...chainsCopy, keyId])
    }
    // console.log(chainsCopy.length);
  }

  useEffect(() => {
    // console.log("Adding timeout");
    setTimeout(addChain, 5000);
  }, [chains])

  const destroyChain = useCallback((chainKey) => {
    // somehow key 1 is getting removed before we get here

    console.log("destroying ", chainKey);
    console.log(chains);
    let chainsCopy = [...chains];
    console.log(chainsCopy);
    console.log(chainsCopy.filter(key => key !== chainKey))
    // setChains(chainsCopy.filter(key => key !== chainKey));
  });




  return (
    <>
      {/* <ambientLight intensity={0.7} /> */}
      {/* <hemisphereLight 
      skyColor={0xEEFFFF}
      groundColor={0x000000}
      intensity={0.25} 
      position={[0, 100, 0]} 
      /> */}
      
      <CameraMove />
      {/* <OrbitControls /> */}
      {/* <DelayedSpinningBox /> */}
      {/* <BoxGenerator /> */}
      {/* <ConnectedSpheres/> */}
      {chains.map(chain => (
        <ConnectedSpheres 
          hue={hue}
          saturation={saturation}
          lightness={lightness}
          key={chain}
          keyId={chain}
          minNodes={minNodes}
          maxNodes={maxNodes}
          drawTime={500}
        />
      ))}

    </>
  )
}

export default Scene;