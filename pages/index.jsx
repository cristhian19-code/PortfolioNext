import {
  Flex,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import FontAWList from '../components/FontAWList'
import Technologies from '../components/Technologies'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function Home({ data }) {
  const [technologies, setTechnologies] = useState(
    [
      {
        name: 'Frontend',
        techno: [
          'HTML',
          'CSS',
          'JS',
          'Vuejs',
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
  
  return (
      <Layout>
        <Flex className={styles.flex_container} direction={'column'} px={10}>
          
          <motion.div
            initial={{
              translateX: -50,
              opacity: 0
            }}
            animate={{
              translateX: 0,
              opacity: 1
            }}
            transition={{duration: 1.5}}
          >
          <Text>Hola soy Christian Ricardo y estoy en 5to ciclo en la carrera de <strong>Ingenieria de Sistemas</strong> de la Univesidad Nacional de Ingerieria, cuento con mas de 2 años de experiencia en mundo del desarrollo frontend, soy muy apacionado en lo que hago </Text>  
          </motion.div>
          
          <Text mt={20} fontSize={35} fontWeight={'bold'}>Conocimientos</Text>
          <FontAWList />
          <Flex justifyContent={'center'} gap={5}>
            {
              technologies.map(techno => {
                return (
                  <Technologies key={techno.name} techno={ techno } />
                  )
                })
          }
        </Flex>
        </Flex>
    </Layout>
  )
}