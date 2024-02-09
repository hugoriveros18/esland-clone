import { useScroll, useTransform } from "framer-motion"
import useScreenWidth from "./useScreenWidth";
import type { MutableRefObject } from "react";

type Direction = 'left' | 'right';

interface useScrollAnimationProps {
    sectionRef: MutableRefObject<any>
    direction: Direction
}

export default function useScrollAnimation({
    sectionRef,
    direction
}:useScrollAnimationProps) {
    
  // DEVICE
  const device = useScreenWidth();

  // SCROLL
  const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["0 1", "1.33 1"]
  })

  // METHODS
  const fitValuesToScreen = (desktop:number, tablet:number, phone:number) => {
      switch (device) {
          case 'desktop':
              return desktop
          case 'tablet':
              return tablet
          case 'phone':
              return phone
      }
  }

  // CONVERTION
  const translateText1 = useTransform(scrollYProgress, [0, fitValuesToScreen(0.4, 0.2, 0.2)], [direction === 'left' ? -70 : 70, 0]);
  const translateText2 = useTransform(scrollYProgress, [0, fitValuesToScreen(0.6, 0.3, 0.4)], [direction === 'left' ? -120 : 120, 0]);
  const translateText3 = useTransform(scrollYProgress, [0, fitValuesToScreen(0.8, 0.4, 0.5)], [direction === 'left' ? -240 : 240, 0]);
  const translateImage = useTransform(scrollYProgress, [0, fitValuesToScreen(0.8, 0.5, 0.8)], [direction === 'left' ? 200 : -200, 0]);
  const opacityText1 = useTransform(scrollYProgress, [0, fitValuesToScreen(0.4, 0.4, 0.4)], [0, 1]);
  const opacityText2 = useTransform(scrollYProgress, [0, fitValuesToScreen(0.6, 0.5, 0.5)], [0, 1]);
  const opacityText3 = useTransform(scrollYProgress, [0, fitValuesToScreen(0.8, 0.6, 0.6)], [0, 1]);
  const opacityImage = useTransform(scrollYProgress, [0, fitValuesToScreen(0.6, 0.7, 0.8)], [0, 1]);

  // RETURN
  return {
    translateText1,
    translateText2,
    translateText3,
    translateImage,
    opacityText1,
    opacityText2,
    opacityText3,
    opacityImage
  }
}
