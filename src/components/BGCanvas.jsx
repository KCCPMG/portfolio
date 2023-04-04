import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three';

import BoxGenerator from './BoxGenerator';
import ConnectedSpheres from './ConnectedSpheres';


function BGCanvas() {

	const [chains, setChains] = useState([<ConnectedSpheres/>]);
	
  // const cameraZ = useRef(0);

	// useFrame((camera) => {
		// cameraZ.current = camera.position.z
	// })

	return (
		<div id="canvas-container" style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
			<Canvas 
				camera={{ 
					fov: 70, 
					position: [0,0,-35]
				}}
			>
				{/* <ambientLight intensity={0.4} /> */}
				{/* <hemisphereLight intensity={0.25} position={[0, 100, 0]} /> */}
				<pointLight />
				<CameraMove />
				{/* <OrbitControls /> */}
				{/* <DelayedSpinningBox /> */}
				{/* <BoxGenerator /> */}
				{/* <ConnectedSpheres/> */}
				{chains}
			</Canvas>
		</div>
	)
}

export default BGCanvas;




function CameraMove() {

	useFrame(({camera})=>{
		camera.position.z += 0.3;
	})

}




