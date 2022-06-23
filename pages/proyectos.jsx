import CardProject from "../components/CardProject"
import { Flex, Select } from '@chakra-ui/react'
import { motion, } from 'framer-motion'
import Layout from '../components/Layout'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { useState } from "react"

const ProjectsMotion = motion(Flex)

export default function Projects({ data }) {
  const [projects, setProjects] = useState(data)

  const projectsVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      }
    },
    hidden: {
      opacity: 1,
    }
  }

  const projectVariant = {
    show: {
      opacity: 1,
      scale: 1
    },
    hidden: {
      opacity: 0,
      scale: 0.5
    }
  }
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
        initial="hidden"
        animate="show"
        variants={projectsVariants}
        justifyContent={'center'}
        gap={5}
        px={2}
        py={5}
        wrap={'wrap'}>
        {
          projects.map(project => {
            return (
              <CardProject variants={projectVariant} key={project.title} project={project} />
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
