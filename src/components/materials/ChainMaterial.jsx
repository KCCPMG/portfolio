function ChainMaterial({color}) {
  return (
    <meshPhysicalMaterial 
      reflectivity={1.0}
      metalness={1.0}
      clearcoat={1.0}
      clearcoatRoughness={0.5}
      color={color}
    />
  )
}

export default ChainMaterial;