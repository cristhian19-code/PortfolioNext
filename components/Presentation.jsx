import { Grid, GridItem, Image, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";

const ImageMotion = motion(Image);
const TextMotion = motion(Text);
const BoxMotion = motion(Box);

export default function Presentation() {
  const { mobile } = useWindowDimensions();

  return (
    <>
      <BoxMotion
        position={"absolute"}
        bg={"black"}
        h={"100vh"}
        initial={{ width: "0" }}
        animate={{ width: !mobile ? "50%" : "100%" }}
        transition={{ duration: 1 }}
      ></BoxMotion>
      <Grid
        templateColumns={[
          "repeat(1,fr)",
          "repeat(1,fr)",
          "repeat(1,fr)",
          "repeat(2, 1fr)",
        ]}
        h={"100vh"}
        minH={"100vh"}
        bg={"white"}
      >
        <GridItem
          color={"gray.200"}
          w="100%"
          p={10}
          display={"flex"}
          flexDirection={"column"}
          alignItems={["center", "center", "center", "start"]}
          justifyContent={"center"}
        >
          <Box height={"fit-content"} overflow={"hidden"}>
            <TextMotion
              fontSize={[30,30,50,50,50]}
              textTransform={"uppercase"}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 0.8,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 1.1,
              }}
              fontWeight="bold"
            >
              Christian Ricardo
            </TextMotion>
          </Box>
          <Box height={"fit-content"} overflowY={"hidden"}>
            <TextMotion
              fontSize={[20,20,30,30,30]}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 0.8,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              Desarrollador Frontend
            </TextMotion>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ImageMotion
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.9,
              duration: 0.9,
            }}
            height={[200, 280, 300, 350,350]}
            width={[200, 280, 300, 350,350]}
            borderRadius={2}
            my={10}
            zIndex={2}
            src="/img/681ba850fb11e0d8641482a2ea5e0c87.jpg"
          />
        </GridItem>
      </Grid>
    </>
  );
}
