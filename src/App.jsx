// Import necessary dependencies
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Experience } from "./components/Experience";

function App() {
  // Get camera position values from Leva controls
  const { cameraPosition } = useControls({
    cameraPosition: {
      value: [0, 1, 5], // default camera position
      step: 0.1,
    },

    // avatarPosition: {
    //   value: [0, 0, 0], // default avatar position
    //   step: 0.1,
    // },
  });

  return (
    <Canvas shadows camera={{ position: cameraPosition, fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;

// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";

// function App() {
//   return (
//     // <Canvas shadows camera={{ position: [0, 1, 5], fov: 30 }}>
//     <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}> 
//       <color attach="background" args={["#ececec"]} />
//       <Experience />
//     </Canvas>
//   );
// }

// export default App;
