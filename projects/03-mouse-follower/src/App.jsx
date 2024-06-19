import { useState, useEffect } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log(enabled);

    // follow pointer if enabled is true
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
      console.log("handleMove", { clientX, clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };  

  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
          /*transform: `translate(
            ${enabled ? 0 : -100}px, 
            ${enabled ? 0 : -100}px)`,*/
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Deactivate" : "Activate"} pointer follower
      </button>
    </main>
  );
}

export default App;
