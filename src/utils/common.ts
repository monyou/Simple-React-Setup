import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/store";

export const useThemes = () => {
  const theme = useAppSelector((state) => state.global.theme);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.dataset.theme = theme;
  }, [theme]);
};

export const useIsMobileView = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1000);

  useEffect(() => {
    window.addEventListener("resize", switchThemes);

    return () => {
      window.removeEventListener("resize", switchThemes);
    };
  }, [isMobile]);

  const switchThemes = (): void => {
    if (window.innerWidth >= 1000) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  return isMobile;
};

const commonFuncs = {
  useThemes,
  useIsMobileView,
};

export default commonFuncs;
