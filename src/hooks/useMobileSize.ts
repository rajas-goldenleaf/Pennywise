/**
 * This function will return a boolean value of true or false depending on the size of the window.
 * @returns A boolean value.
 */
import { useState, useLayoutEffect } from "react";
// Hook
function useMobileSize() {
  const [mobileSize, setMobileSize] = useState<boolean>();
  useLayoutEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        window.innerWidth < 720 ? setMobileSize(true) : setMobileSize(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return mobileSize;
}
export default useMobileSize;
