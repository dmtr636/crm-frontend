import {useEffect, useRef, useState} from "react";

export const useFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => { // @ts-ignore
    htmlElRef.current && htmlElRef.current.focus()
  }

  return [ htmlElRef, setFocus ]
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}