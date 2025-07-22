import { useEffect, useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleWidnowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useLayoutEffect(() => {
    handleWidnowSize();
    window.addEventListener("resize", handleWidnowSize);
    return () => {
      window.removeEventListener("resize", handleWidnowSize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
