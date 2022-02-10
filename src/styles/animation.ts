import {
  Flex,
  FlexProps,
  Stack,
  StackProps,
  Box,
  BoxProps,
  Grid,
  GridProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const AnimationFlex = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const AnimationFade = {
  hidden: { y: "-100vh" },
  visible: { y: "0", transition: { duration: 1.5, type: "spring" }},
};

export const AnimationButton = {
  hover:{
    scale:1.1
  },
  tap: {
    scale: 0.5,
    rotate: -20,
    borderRadius: "100%",
  },
};

export const showComponent = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

export const showToggleMode = {
  hover: { scale: 1.5 },
  tap: {
    scale: 0.7,
    rotate: -180,
    borderRadius: "100%",
  },
};

export const BouncingElement ={
    y:{
      duration:0.4,
      yoyo:Infinity,
      ease:"easeOut"
    }
}



export const MotionFlex = motion<FlexProps>(Flex);
export const MotionStack = motion<StackProps>(Stack);
export const MotionBox = motion<BoxProps>(Box);
export const MotionGrid = motion<GridProps>(Grid);
