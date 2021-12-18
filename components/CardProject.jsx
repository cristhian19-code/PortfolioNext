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

const ButtonMotion = motion(Button)

export default function CardProject({project}) {
    const { darkmode } = useDarkMode();
    const route = useRouter();
    return (
        <Box
            borderRadius={10}
            p={1}
            boxShadow={'lg'}
            bg={darkmode ? 'blackAlpha.200' : 'yellow.50'}
            width={350}
            textAlign={'center'}
        >
            <Image borderRadius={10} src='https://cdn.dribbble.com/users/2741095/screenshots/15339860/media/e1ab0686ced8aeef09625ed093709a47.png' width={'full'}/>
            
            <Box p={3}>
                <Text
                    fontSize={25}
                    fontWeight={'bold'}
                >
                    {project.title}
                </Text>
                <Text textAlign={'justify'} fontSize={12}>{project.description}</Text>
                <ButtonMotion
                    style={{ marginTop: 15 }}
                    opacity={1}
                    colorScheme={!darkmode ? 'blue' : 'yellow'}
                    variant={'outline'}
                    onClick={ ()=>{ route.push(`/project/${project.id}`) }}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.9,
                        x: "-10px",
                        y: "5px"
                    }}
                >
                    View
                    <ArrowForwardIcon />
                </ButtonMotion>
            </Box>
        </Box>
    )
}
