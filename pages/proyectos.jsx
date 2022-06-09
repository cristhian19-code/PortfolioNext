import CardProject from "../components/CardProject"
import { Flex, Select } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { useState } from "react"

const ProjectsMotion = motion(Flex)

export default function Projects({ data }) {
  const [projects, setProjects] = useState(data)

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
      <Flex mt={20}>
        <Select colorScheme={'blue'} icon={<ArrowDownIcon />} variant={'outline'} onChange={handleSelect} placeholder='Todos'>
          <option value='Vuejs'>Vuejs</option>
          <option value='Reactjs'>Reactjs</option>
          <option value='Angular'>Angular</option>
          <option value='Vanilla'>Vanilla</option>
        </Select>
      </Flex>
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
