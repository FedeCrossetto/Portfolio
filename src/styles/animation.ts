import {Flex,FlexProps,Stack,StackProps} from "@chakra-ui/react";
import {motion} from "framer-motion";


export const AnimationFlex = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };


 export const AnimationSpring = {

    hidden:{ y: "-100vh"},
    visible:{ y:"0", transition:{duration : 1.5, type:"spring"}}
 }


 export const AnimationTransition = {
    // whileHover:{ scale: 1.2, rotate: 360,  transition: { duration: 0.7 }},
  whileTap:{
    scale: 0.5,
    rotate: -20,
    borderRadius: "100%"
  }
 }


 export const showComponent = {

    hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration:1
    }
  }

 }



export const MotionFlex = motion<FlexProps>(Flex);
export const MotionStack = motion<StackProps>(Stack);

