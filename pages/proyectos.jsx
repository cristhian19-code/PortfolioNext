import CardProject from "../components/CardProject"
import { Flex, Select } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { SpinnerIcon, ArrowDownIcon } from '@chakra-ui/icons'
import { useState } from "react"

const SpinnerMotion = motion(SpinnerIcon)
const ProjectsMotion = motion(Flex)

export default function Projects({ data }) {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState(data)

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  const handleSelect = (e) => {
    if (e.target.value) {
      const filter = data.filter(project => project.category === e.target.value)
      setProjects(filter)
    }
    else {
      setProjects(data)
    }
  }

  return (
    <Layout>
      <Flex>
        <Select bg={'tomato'} color={'white'} icon={<ArrowDownIcon />} variant={'outline'} onChange={handleSelect} placeholder='Todos'>
          <option value='Vuejs'>Vuejs</option>
          <option value='Reactjs'>Reactjs</option>
          <option value='Angular'>Angular</option>
          <option value='Vanilla'>Vanilla</option>
        </Select>
      </Flex>

      {
        loading
          ? (
            <SpinnerMotion
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              margin={[50, 0, 50, 0]}
              transition={{ duration: 2 }}
              fontSize={100} color={'tomato'} />
          )
          : (
            <ProjectsMotion
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              justifyContent={'center'}
              gap={5}
              px={2}
              py={5}
              wrap={'wrap'}>
              {
                projects.map(project => {
                  return (
                    <CardProject key={project.title} project={project} />
                  )
                })
              }
            </ProjectsMotion>
          )
      }
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
