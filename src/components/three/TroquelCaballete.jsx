/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'



export function Dav(props) {
	const { nodes, materials } = useGLTF("/gltf/TroquelCaballete.gltf");
	return (
	  <group {...props} dispose={null} scale={.5}>
		{/* <PerspectiveCamera
		  makeDefault={false}
		  far={100}
		  near={0.1}
		  fov={39.598}
		  position={[2.125, 2.178, -1.992]}
		  rotation={[-2.498, 0.745, 2.671]}
		/> */}
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["CABALLETE_01_ARD-geom"].geometry}
		  material={materials.CABALLETE_01_ARD_front}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["CABALLETE_01_ARD-geom_1"].geometry}
		  material={materials.CABALLETE_01_ARD_back}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["CABALLETE_01_ARD-geom_2"].geometry}
		  material={materials.CABALLETE_01_ARD_edge}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes.Plano001_1.geometry}
		  material={materials["back-dil"]}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes.Plano001_2.geometry}
		  material={materials.CABALLETE_01_ARD_edge}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes.Plano001_3.geometry}
		  material={materials.CABALLETE_01_ARD_front}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["CABALLETE_01_ARD-geom001"].geometry}
		  material={materials.CABALLETE_01_ARD_front}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["CABALLETE_01_ARD-geom001_1"].geometry}
		  material={materials.CABALLETE_01_ARD_back}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["CABALLETE_01_ARD-geom001_2"].geometry}
		  material={materials.CABALLETE_01_ARD_edge}
		/>
	  </group>
	);
  }

const Troquel1g0102 = ({}) => {
	return (

			<Canvas
				style={{  }}
				camera={{
					view: {
						enabled: true,
						fullWidth: 100,
						fullHeight: 100,
						offsetX: 0,
						offsetY: -30,
						width: 100,
						height: 100
					},
					focus: 10,
					fov: 80,
					zoom: 2.5
          ,
					position: [0, 1, 1.5]
				}} >
				<ambientLight intensity={2} />
				{/* <pointLight position={[10, 10, 2]} /> */}
				<Suspense fallback={null}>

					<Dav/>

				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={1} />
				<ContactShadows resolution={512} scale={1} position={[0, -0.03, 0]} blur={2} opacity={0.6} far={1} color='#202020' />
			</Canvas>
	)
}
export default Troquel1g0102
