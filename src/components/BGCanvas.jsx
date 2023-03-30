import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber';
import { useState, useRef, useEffect } from 'react';

import BoxGenerator from './BoxGenerator';


function BGCanvas() {
	
  // const [z, setZ] = useState(-2);

	return (
		<div id="canvas-container" style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
			<Canvas 
				camera={{ fov: 70, position: [0,0,-5] }}
			>
				<ambientLight intensity={1.9} />
				<CameraMove />
				{/* <Animator /> */}
				{/* <DelayedSpinningBox /> */}
				<BoxGenerator />
				{/* <mesh position={[0,0,0]} onClick={(e) => console.log('click')}>
					<boxGeometry />
					<meshStandardMaterial />
				</mesh> */}
			</Canvas>
		</div>
	)
}

export default BGCanvas;


function Animator() {

	useFrame(({camera, clock})=>{
		camera.position.z += 0.002;
		// console.log(clock.getDelta());

		// console.log(clock.oldTime, performance.now(), performance.now()-clock.oldTime)
		// if (camera.position.z >= 0) console.log(performance.now() - clock.startTime)

		// console.log(clock.getElapsedTime(), clock);
		// if (clock.getElapsedTime() > 0.25) {
		// 	console.log("RESET ", clock.getDelta());
		// }

		// let stopmakingafuckingerror = {
		// 	"autoStart": true,
		// 	"startTime": 1174.7000000011176,
		// 	"oldTime": 11325.800000000745,
		// 	"elapsedTime": 10.151099999999618,
		// 	"running": true
		// }
	})
}

function CameraMove() {

	useFrame(({camera, clock})=>{
		camera.position.z += 0.002;
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



