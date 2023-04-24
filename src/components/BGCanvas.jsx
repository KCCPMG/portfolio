import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useState, useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three';

import BoxGenerator from './BoxGenerator';
import ConnectedSpheres from './ConnectedSpheres';
import Scene from './Scene';


const keyGenerator = function*(){
	let i=1;
	while (true) yield i++;
}();


function BGCanvas() {

	// const [chains, setChains] = useState([
	// 	<ConnectedSpheres
	// 		realizedHSL={[0.556,0.72,0.47]}
	// 		key={0}
	// 	/>
	// ]);

	

/** 
	setTimeout(() => {
		// console.log(performance.now(), chains.length)
		setChains([...chains.slice(1),
			<ConnectedSpheres
				realizedHSL={[0.556,0.72,0.47]}
				key={keyGenerator.next().value}
			/>
		]),
		setTimeout(() => {
			// console.log(performance.now(), chains.length)
			setChains([...chains,
				<ConnectedSpheres
					realizedHSL={[0.556,0.72,0.47]}
					key={keyGenerator.next().value}
				/>
			])
			setChains([...chains.slice(1)])
		}, 1500)
	}, 5000)
*/	
	


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
				<Scene />
			</Canvas>
		</div>
	)
}

export default BGCanvas;









