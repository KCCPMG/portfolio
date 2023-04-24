import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useState, useRef, useEffect, useCallback } from 'react';
import { OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three';

import randomInt from '../helpers/randomInt';
import CameraMove from './CameraMove';
import BoxGenerator from './BoxGenerator';
import ConnectedSpheres from './ConnectedSpheres';


const keyGenerator = function*(){
	let i=1;
	while (true) yield i++;
}();


// const chainOneLast = {current: (performance.now())};
// const chainTwoLast = {current: (performance.now() + 1500)};


function Scene() {

  const [chains, setChains] = useState([0])
  
  const realizedHSL=[0.556,0.72,0.47];
  const minNodes=4;
  const maxNodes=15;

  console.log(chains);

  const addChain = useCallback(() => {
    let keyId = keyGenerator.next().value;
    console.log("adding chain ", keyId);
    let chainsCopy = [...chains];
    console.log(chainsCopy.length);
    if (chainsCopy.length > 5) {
      chainsCopy.shift();
    }
    console.log(chainsCopy.length);
    setChains([chainsCopy, keyId])
  })

  const destroyChain = useCallback((chainKey) => {
    // somehow key 1 is getting removed before we get here
    console.log("destroying ", chainKey);
    console.log(chains);
    let chainsCopy = [...chains];
    console.log(chainsCopy);
    console.log(chainsCopy.filter(key => key !== chainKey))
    setChains(chainsCopy.filter(key => key !== chainKey));
  });

  useEffect(() => {
    console.log(chains);
  }, [chains])


  // const chainOneLast = useRef(performance.now());
	// const chainTwoLast = useRef(performance.now() + 1500);

  // const cycleChains = (() => {
  //   setChains([...chains.slice(1), 
  //     <ConnectedSpheres 
  //       realizedHSL={[0.556,0.72,0.47]}
  //       key={keyGenerator.next().value}
  //       destroyChain={destroyChain}
  //     />
  //   ])
  // })

  

	useFrame(() => {
    // console.log(chainOneLast);
		// if ((performance.now() - chainOneLast.current) > 5000) {
			// console.log("5 seconds on one");
			// chainOneLast.current = performance.now();
      // cycleChains();
		// }
    // if ((performance.now() - chainTwoLast.current) > 5000) {
			// console.log("5 seconds on two");
			// chainTwoLast.current = performance.now();
      // cycleChains();
		// }
	})

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
          realizedHSL={realizedHSL}
          key={chain}
          keyId={chain}
          nodeCount={randomInt(minNodes, maxNodes)}
          drawTime={500}
          destroySelf={destroyChain}
          addChain={addChain}
        />
      ))}
    </>
  )
}

export default Scene;