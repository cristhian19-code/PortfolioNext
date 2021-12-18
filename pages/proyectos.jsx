import CardProject from "../components/CardProject"
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from "react"
import Layout from '../components/Layout'
export default function Projects() {
    const [projects, setProjects] = useState([
        { title: 'Project1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?', id: 1 },
        { title: 'Project2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?', id: 2 },
        { title: 'Project3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?', id: 3 },
        { title: 'Project3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?', id: 3 },
        { title: 'Project4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?', id: 4 },
        { title: 'Project5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?', id: 5 },
        { title: 'Project6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?', id: 7 },
        {title: 'Project8',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?',id:8 },
    ])
    return (
        <Layout>
            <motion.div
                initial={{ translateY: 50 ,opacity: 0}}
                animate={ {translateY: 0, opacity: 1}}
                transition={{duration: 1.5, ease: "easeOut"}}
                >
                <Flex
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
                </Flex>
            </motion.div>
        </Layout>
    )
}