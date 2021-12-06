import { useEffect } from "react";
import { useAppSelector } from "../redux/store";

export const useThemes = () => {
  const theme = useAppSelector((state) => state.global.theme);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.dataset.theme = theme;
  }, [theme]);
};

const commonFuncs = {
  useThemes,
};

export default commonFuncs;
