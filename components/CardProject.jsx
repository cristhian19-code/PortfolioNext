import {
    Box,
    Image,
    Text,
    Button
} from '@chakra-ui/react'
import { useDarkMode } from '../hooks/useDarkMode'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import styles from '../styles/index.module.css'

const ButtonMotion = motion(Button)

export default function CardProject({project}) {
    const { darkmode } = useDarkMode();
    const route = useRouter();
    return (
        <Box
            borderRadius={10}
            boxShadow={'lg'}
            bg={darkmode ? 'blackAlpha.200' : 'yellow.50'}
            width={350}
            textAlign={'center'}
        >
            <Image borderRadius={10} src={project.img} width={'full'} height={210} />
            
            <Box p={3}>
                <Text
                    fontSize={25}
                    fontWeight={'bold'}
                >
                    {project.title}
                </Text>
                <Text className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }} textAlign={'justify'} fontSize={12}></Text>
                <ButtonMotion
                    style={{ marginTop: 15 }}
                    opacity={1}
                    colorScheme={!darkmode ? 'blue' : 'yellow'}
                    variant={'outline'}
                    onClick={() => { route.push(`/project/${project._id}`) }}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.9,
                        x: "-10px",
                        y: "5px"
                    }}
                >
                    Ver detalle
                    <ArrowForwardIcon />
                </ButtonMotion>
            </Box>
        </Box>
    )
}
