import {useState, useEffect, useRef} from 'react';

function randInt(min, max) {
  if (max===min) return min;
  else if (max<min) throw new Error("Max must be greater than min");
  else return Math.floor((Math.random() * (max-min+1)) + min);
}


function Box({x=0, y=0, z=0, getRef}) {
  const ref = useRef();

  useEffect(()=>{
    getRef(ref);
  }, [])

  return (
    <mesh 
      ref={ref} 
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

  

	const addBox = () => {
    console.log('add box');
    

    const getRef = (ref) => {
      console.log("getRef", ref);
      console.log(boxes); 
    }

    const mesh = <Box getRef={getRef} key={keyGenerator.next().value} />;

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
		addBox();
		setTimeout(deleteBox, 150000);
	}, [])


	return (
		<>
			{boxes.map(box => box.mesh)}
		</>
	)


}

export default BoxGenerator;