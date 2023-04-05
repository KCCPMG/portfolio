function ChainMaterial() {
  return (
    <meshPhysicalMaterial 
      reflectivity={1.0}
      metalness={1.0}
      clearcoat={1.0}
      clearcoatRoughness={0.5}

    />
  )
}

export default ChainMaterial;