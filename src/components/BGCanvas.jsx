import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useState, useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three';

import BoxGenerator from './BoxGenerator';
import ConnectedSpheres from './ConnectedSpheres';


const keyGenerator = function*(){
	let i=0;
	while (true) yield i++;
}();


function BGCanvas() {


	

	const [chains, setChains] = useState([
		<ConnectedSpheres
				realizedHSL={[0.556,0.72,0.47]}
				key={keyGenerator.next().value}
			/>
	]);


	setInterval(() => {
		setChains([...chains,
			<ConnectedSpheres
				realizedHSL={[0.556,0.72,0.47]}
				key={keyGenerator.next().value}
			/>
		])
	}, 5000)
	
	


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
				<ambientLight intensity={0.7} />
				{/* <hemisphereLight 
					skyColor={0xEEFFFF}
					groundColor={0x000000}
					intensity={0.25} 
					position={[0, 100, 0]} 
				/> */}
				<pointLight 
					position={[200,200,0]}
				/>
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




