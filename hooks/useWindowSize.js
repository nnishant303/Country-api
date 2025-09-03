import { useEffect, useState } from "react";


export default function useWindowSize() {
    const [WindowSize, SetWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        window.addEventListener("resize", () => {
          SetWindowSize({ width: window.innerWidth, height: window.innerHeight });
        });
      }, []);
  return (
    WindowSize
  )
}
