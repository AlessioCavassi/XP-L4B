import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      directionalLight: any;
    }
  }
}
