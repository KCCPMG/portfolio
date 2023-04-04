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

export default DelayedSpinningBox;