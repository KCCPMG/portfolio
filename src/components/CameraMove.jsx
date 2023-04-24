import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function CameraMove() {
	
	const light = useRef();

	useFrame(({camera})=>{
		camera.position.z += 0.3;
		light.current.position.z = camera.position.z;
	})

	// light to move with camera
	return (
		<pointLight 
			ref={light}
			position={[200,200,0]}
		/>
	)
}4

export default CameraMove;