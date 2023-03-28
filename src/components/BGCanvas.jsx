import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';



function BGCanvas() {
	
  const [z, setZ] = useState(-2);

	return (
		<div id="canvas-container" style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
			<Canvas 
				
				camera={{ fov: 70, position: [0,0,z] }}
			>
				<ambientLight intensity={0.3} />
				<Animator setZ={setZ} z={z}/>
				<mesh position={[0,0,0]}>
					<boxGeometry />
					<meshStandardMaterial />
				</mesh>
			</Canvas>
		</div>
	)
}

export default BGCanvas;


function Animator(props) {

	useFrame(({camera})=>{
		camera.position.z += 0.002;
		// props.setZ(props.z + 0.01);
		// console.log(props.z);
	})
}


// let scene, camera, renderer, cube;


// function init () {

// 	scene = new THREE.Scene();
	
// 	// angle, aspect ratio, near clip plane, far clip plane
// 	camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
	
// 	renderer = new THREE.WebGLRenderer({ antialias: true});
	
// 	renderer.setSize(window.innerWidth, window.innerHeight);
	
// 	document.body.appendChild(renderer.domElement);
	
// 	const geometry = new THREE.BoxGeometry(1,1,1,1);
// 	const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

// 	// create a texture, commented out because I don't have these textures
// 	// can be gotten from Traversy's github for this project
// 	// const texture = new THREE.TextureLoader().load('textures/crate.gif') ;
// 	// const material = new THREE.MeshBasicMaterial( {map: texture} );

// 	cube = new THREE.Mesh( geometry, material );
// 	scene.add(cube);
	
// 	camera.position.z = 5;
// }

// function animate() {
// 	requestAnimationFrame(animate);

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render(scene, camera);
// }


// function onWindowResize() {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', onWindowResize, false);

// init();
// animate();