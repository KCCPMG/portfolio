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









