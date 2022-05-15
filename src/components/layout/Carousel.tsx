import React, { useRef, useEffect, useState } from "react";
import { Container, Flex, Image ,Link } from "@chakra-ui/react";
import images from "../../assets/images";
import "../../styles/Carousel.css";
import { MotionFlex } from "../../styles/animation";

export const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetHeight);
  }, []);


  return (
    <>
      <Container minWidth={["480px", "767px", "992px", "1200px"]} px="5rem">
        <Flex justify="center">
          <MotionFlex
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
          >
            <MotionFlex
              drag="x"
              dragConstraints={{ right: 0, left: -width/2 }}
              className="inner-carousel"
            >
              {images.map((image) => {
                return (
                  <MotionFlex className="item" key={image}>
                    {/* <a href="https://google.com.ar" target="_blank"> */}
                    <Image src={image} 
                    objectFit="contain"
                    minWidth={["13rem","13rem","15rem","15rem"]}
                    // minHeigth={["10rem","rem","15rem","20rem"]}
                    />
                    {/* </a> */}
                  </MotionFlex>
                );
              })}
            </MotionFlex>
          </MotionFlex>
        </Flex>
      </Container>
    </>
  );
};
