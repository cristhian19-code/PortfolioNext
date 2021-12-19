import CardProject from "../components/CardProject"
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function Projects({ data }) {
  return (
    <Layout>
      <motion.div
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Flex
          justifyContent={'center'}
          gap={5}
          px={2}
          py={5}
          wrap={'wrap'}>
          {
            data.map(project => {
              return (
                <CardProject key={project.title} project={project} />
              )
            })
          }
        </Flex>
      </motion.div>
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
