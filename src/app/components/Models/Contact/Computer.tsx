import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import * as THREE from "three";

// type for GLTF result
type GLTFResult = ReturnType<typeof useGLTF> & {
  nodes: {
    Cube000_ComputerDesk_0001_1: Mesh;
    Cube000_ComputerDesk_0001_2: Mesh;
  };
  materials: {
    "ComputerDesk.001": THREE.Material;
    "FloppyDisk.001": THREE.Material;
  };
};

type GroupElementProps = React.ComponentProps<"group">;

export function Computer(props: GroupElementProps) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  ) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
