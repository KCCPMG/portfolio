import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useRef, useEffect } from 'react';
import { Vector3 } from 'three';

import BoxGenerator from './BoxGenerator';
import ConnectedSpheres from './ConnectedSpheres';


function BGCanvas() {
	
  // const [z, setZ] = useState(-2);

	return (
		<div id="canvas-container" style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
			<Canvas 
				camera={{ 
					fov: 70, 
					position: [0,40,-35]
				}}
			>
				<ambientLight intensity={1.0} />
				{/* <CameraMove /> */}
				{/* <DelayedSpinningBox /> */}
				{/* <BoxGenerator /> */}
				<ConnectedSpheres />
			</Canvas>
		</div>
	)
}

export default BGCanvas;




function CameraMove() {

	useFrame(({camera, clock})=>{
		camera.position.z += 0.02;
	})

}

function DelayedSpinningBox() {

	let spin = false;

	const meshRef = useRef();
	const mesh = (
		<mesh ref={meshRef} position={[0,0,0]} onClick={(e) => console.log('click')}>
			<boxGeometry />
			<meshStandardMaterial />
		</mesh>
	)

	useFrame(({clock}) => {
		if ((performance.now() - clock.startTime) > 10000) {
			spin=true;
		}
		if (spin) {
			meshRef.current.rotation.x += 0.01;
		}
	})

	return mesh;
	
}



