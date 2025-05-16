import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshBasicMaterial: ReactThreeFiber.Object3DNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
      meshStandardMaterial: ReactThreeFiber.Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      meshPhongMaterial: ReactThreeFiber.Object3DNode<THREE.MeshPhongMaterial, typeof THREE.MeshPhongMaterial>;
      meshToonMaterial: ReactThreeFiber.Object3DNode<THREE.MeshToonMaterial, typeof THREE.MeshToonMaterial>;
      meshPhysicalMaterial: ReactThreeFiber.Object3DNode<THREE.MeshPhysicalMaterial, typeof THREE.MeshPhysicalMaterial>;
      meshMatcapMaterial: ReactThreeFiber.Object3DNode<THREE.MeshMatcapMaterial, typeof THREE.MeshMatcapMaterial>;
      meshDepthMaterial: ReactThreeFiber.Object3DNode<THREE.MeshDepthMaterial, typeof THREE.MeshDepthMaterial>;
      meshNormalMaterial: ReactThreeFiber.Object3DNode<THREE.MeshNormalMaterial, typeof THREE.MeshNormalMaterial>;
      lineBasicMaterial: ReactThreeFiber.Object3DNode<THREE.LineBasicMaterial, typeof THREE.LineBasicMaterial>;
      lineDashedMaterial: ReactThreeFiber.Object3DNode<THREE.LineDashedMaterial, typeof THREE.LineDashedMaterial>;
      material: ReactThreeFiber.Object3DNode<THREE.Material, typeof THREE.Material>;
      ambientLight: any;
      directionalLight: any;
    }
  }
}
