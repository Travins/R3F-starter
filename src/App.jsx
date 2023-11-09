import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <>
      <h1 className="absolute top-0 left-0 text-3xl text-orange-600 font-bold text-center py-2 w-full">
        React Three Fiber
      </h1>
      <Canvas camera={{ position: [3, 3, 3] }} className="absolute inset-0">
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
