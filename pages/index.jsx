import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Flex,
  Text,
  Box,
  Container
} from '@chakra-ui/react'

import FontAWList from '../components/Fontawesome/FontAWList'

import Technologies from '../components/Technologies'
import Presentation from '../components/Presentation'

import Layout from '../components/Layout'

const FlexMotion = motion(Flex);
const BoxMotion = motion(Box);

export default function Home({ data }) {
  const [loading, setLoading] = useState(true)
  const [technologies, setTechnologies] = useState(
    [
      {
        name: 'Frontend',
        techno: [
          'HTML',
          'CSS',
          'JS',
          'Vuejs V2,V3',
          'Vuetify',
          'Bootstrap',
          'PrimeVue',
          'TailwindCss',
          'ChakraUI'
        ]
      },
      {
        name: 'Backend',
        techno: [
          'Nodejs',
          'MongoDB',
          'PHP',
          'Firebase'
        ]
      },
      {
        name: 'Diseño',
        techno: [
          'Figma',
          'AdobeXD',
        ]
      }
    ]
  )

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 2000)
  }, [])

  const container = {
    hidden: {
      opacity: 1
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7
      }
    }
  }

  const box = {
    hidden: { height: '100vh' },
    show: { height: '0' },
  }

  if (loading) {
    return (
      <FlexMotion
        direction={'row'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1000
        }}
        transition={{
          duration: 4
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <BoxMotion variants={box} bg={'orange.300'} w={'33.3vw'} />
        <BoxMotion variants={box} bg={'gray.600'} w={'33.3vw'} />
        <BoxMotion variants={box} bg={'gray.700'} w={'33.3vw'} />
      </FlexMotion>
    )
  }

  return (
    <Layout>
      <Flex style={{ position: 'relative' }} direction={'column'}>

        <Presentation />

        <Box px={['10', '10', '72', '72']}>
          <motion.div
            style={{ height: '100vh' }}
            initial={{
              translateX: -50,
              opacity: 0
            }}
            animate={{
              translateX: 0,
              opacity: 1
            }}
            transition={{ duration: 1.5 }}
          >
            <Text>Hola soy Christian Ricardo y estoy en 7to ciclo en la carrera de <strong>Ingenieria de Sistemas</strong> de la Univesidad Nacional de Ingerieria, cuento con mas de 2 años de experiencia en mundo del desarrollo frontend, soy muy apacionado en lo que hago </Text>
          </motion.div>

          <Container>
            <Text mt={20} fontSize={35} fontWeight={'bold'}>Conocimientos</Text>
            <FontAWList />
            <Flex justifyContent={'center'} gap={5}>
              {
                technologies.map(techno => {
                  return (
                    <Technologies key={techno.name} techno={techno} />
                  )
                })
              }
            </Flex>
          </Container>
        </Box>
      </Flex>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://upload-projects.herokuapp.com/api/projects', {
      method: 'GET'
    });

    const projects = await res.json();
    return {
      props: {
        data: projects.data
      }
    }
  } catch (err) {

  }
}
