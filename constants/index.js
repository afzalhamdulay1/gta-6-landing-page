import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023.98 });

  if (isMobile) {
    return {
      initialMaskPos: "50% -2000vh",
      initialMaskSize: "20000% auto",
      maskPos: "50% 15vh",
      maskSize: "55% auto",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% -700vh",
      initialMaskSize: "5000% auto",
      maskPos: "50% 17vh",
      maskSize: "30% auto",
    };
  }

  return {
    initialMaskPos: "50% -1500vh",
    initialMaskSize: "5000% auto",
    maskPos: "50% 15vh",
    maskSize: "15% auto",
  };
};
