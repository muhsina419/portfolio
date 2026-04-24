import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const trailConfig = { damping: 30, stiffness: 200, mass: 0.8 };
  const trailX = useSpring(0, trailConfig);
  const trailY = useSpring(0, trailConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
    trailX.set(mousePosition.x);
    trailY.set(mousePosition.y);
  }, [mousePosition, cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#FF6F91] rounded-full pointer-events-none z-[9999] hidden md:block shadow-lg"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[#288DB5] rounded-full pointer-events-none z-[9998] hidden md:block opacity-60"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
