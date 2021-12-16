import {
  Flex,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import FontAWList from '../components/FontAWList'
import Technologies from '../components/Technologies'
import styles from '../styles/index.module.css'
import CardProject from '../components/CardProject'
export default function Home() {
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
        ]
      }
    ]
  )
  return (
    <>
      <Flex className={styles.flex_container} direction={'column'} px={10}>
        <Text>Hola soy Christian Ricardo y estoy en 5to ciclo de la <strong>Univesidad Nacional de Ingerieria</strong>, cuento con mas de 2 años de experiencia en mundo del desarrollo frontend, me apaciona este mundo y cada dia quiero aprender cosas nuevas que me hagan crecer profesionalmente</Text>
        
        <Text
          mt={20}
          fontSize={35}
          fontWeight={'bold'}>
          Conocimientos
        </Text>
        <FontAWList />
        <Flex
          justifyContent={'center'}
          gap={5}>
          {
            technologies.map(techno => {
              return (
                <Technologies key={techno.name} techno={ techno } />
                )
              })
            }
        </Flex>

        <Text mt={20} fontSize={35} fontWeight={'bold'}>Algunos Proyectos</Text>
      </Flex>
      <Flex
        justifyContent={'center'}
        my={10}
        gap={10}
        wrap={'wrap'}
        >
        <CardProject />
        <CardProject />
        <CardProject />
      </Flex>
    </>
  )
}
