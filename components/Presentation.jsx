import {
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Box
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const ImageMotion = motion(Image);
const TextMotion = motion(Text);
const BoxMotion = motion(Box);

export default function Presentation() {
  return (
    <>
      <BoxMotion position={'absolute'} bg={'black'} h={'100vh'} initial={{width: '0'}} animate={{width: '50%'}} transition={{duration: 1}}></BoxMotion>
      <Grid templateColumns='repeat(2, 1fr)' h={'100vh'}>
        <GridItem color={'gray.200'} w='100%' p={10} display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'center'}>
          <Box
            height={'fit-content'}
            overflow={'hidden'}
          >
            <TextMotion
              fontSize={50}
              textTransform={'uppercase'}
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
                ease: 'easeInOut',
                delay: 1.1,
              }}
              fontWeight="bold"
            >
              Christian Ricardo
            </TextMotion>
          </Box>
          <Box
            height={'fit-content'}
            overflowY={'hidden'}
          >
            <TextMotion
              fontSize={30}
              fontWeight={'bold'}
              textTransform={'uppercase'}
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
                ease: 'easeInOut',
                delay: 1.5,
              }}
            >
              Desarrollador Frontend
            </TextMotion>
          </Box>
        </GridItem>
        <GridItem w='100%' display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <ImageMotion
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 1.9,
              duration: 0.9
            }}
            height={350}
            width={350}
            my={10}
            src="/img/681ba850fb11e0d8641482a2ea5e0c87.jpg"
          />
        </GridItem>
      </Grid>
    </>
  )
}
