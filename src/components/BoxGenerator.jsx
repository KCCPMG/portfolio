import {useState, useEffect, useRef} from 'react';
import { useFrame, useThree } from '@react-three/fiber';

function randInt(min, max) {
  if (max===min) return min;
  else if (max<min) throw new Error("Max must be greater than min");
  else return Math.floor((Math.random() * (max-min+1)) + min);
}


function Box() {
  
  let x = useRef(0);
  let y = useRef(0);
  let z = useRef(0);
  let box = useRef();
  let createTime = useRef(performance.now());

  useThree(({camera}) => {
    x = camera.position.x;
    y = camera.position.y;
    z = camera.position.z + 3;
    
    x = randInt(x-2, x+2), 
    y = randInt(y-2, y+2), 
    z = randInt(z+5, z+10);

    console.log(x,y,z,createTime);
  })

  // box spin after 1 second
  //
  //
  //
  useFrame(() => {
    if ((performance.now() - createTime.current) > 1000) {
      box.current.rotation.x += 0.01;
      box.current.rotation.y += 0.01;
    }
  })

  return (
    <mesh 
      ref={box} 
      position={[x,y,z]}
      onClick={(e) => getRef(ref)}
    >
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}



function BoxGenerator() {
	const [boxes, setBoxes] = useState([]);

  const keyGenerator = function*(){
    let i=0;
    while (true) yield i++;
  }();

  // const ref = useRef({position: {}})
  // let cameraXRef = 0;
  // let cameraYRef = 0;
  // let cameraZRef = 0;
  // let cameraFOVRef = 0;

  // useFrame(({camera}) => {
  //   // console.log(camera.position.x);

  //   // cameraXRef = camera.position.x;
  //   // cameraYRef = camera.position.y;
  //   // cameraZRef = camera.position.z;
  //   // cameraFOVRef = camera.fov;

  //   // console.log(camera);
  //   // console.log(camera.position);
  //   // console.log(camera.fov);
  //   // let zMin = camera.position.z + 5;
  //   // z = randInt(zMin, zMin+5);
  //   const { x, y, z } = camera.position
  //   ref.current.position.set(x, y, z)
  // })
  
  const ref = useRef()

  useFrame(state => {
    // Access the camera position using state.camera.position
    const { x, y, z } = state.camera.position

    // Use the camera position for creating meshes
    // ref.current.position.set(x, y, z)
  })


  const getCoordsForBox = () => {
    let x,y,z;
    // x = randInt()
    // console.log(cameraZRef);
    // let camX = cameraXRef;
    // let camY = cameraYRef;
    // let camZ = cameraZRef;

    let camX = cameraRef.current.position.x;
    let camY = cameraRef.current.position.y;
    let camZ = cameraRef.current.position.z;

    x = randInt(camX-2, camX+2), 
    y = randInt(camY-2, camY+2), 
    console.log(camZ+5, camZ+10)
    z = randInt(camZ+5, camZ+10);
    return {x,y,z}
  }


	const addBox = (x, y, z) => {
    console.log('add box');
    
    // const getRef = (ref) => {
    //   console.log("getRef", ref);
    //   console.log(boxes); 
    // }

    const mesh = <Box 
      // getRef={getRef} 
      key={keyGenerator.next().value} 
      x={x}
      y={y}
      z={z}
    />;

		const box = {
			ref: null,
			mesh,
			createTime: performance.now()
		}
		setBoxes([...boxes, box]);
	}


	// function buildBox(createTime) {
		
	// 	let boxRef = useRef();
	// 	let box = newBox(boxRef);
	// 	boxArr.push({
	// 		ref: boxRef,
	// 		box,
	// 		createTime
	// 	})
		
	// 	console.log("built box", boxArr);

	// 	setTimeout(deleteBox, 5000);
	// 	setTimeout(buildBox(performance.now()), 6000);
	// }

	function deleteBox() {
		const boxesCopy = [...boxes];
		boxesCopy.shift();
		setBoxes(boxesCopy);
	}


	// useFrame(({clock}) => {

	// })

  

	useEffect(() => {
    
		addBox(0,0,0);
		setTimeout(deleteBox, 150000);
    setInterval(()=>{
      deleteBox();
      // const {x,y,z} = getCoordsForBox()
      // addBox(x,y,z)
      addBox();
    }, 5000);
	}, [])


	return (
		<>
			{boxes.map(box => box.mesh)}
		</>
	)


}

export default BoxGenerator;