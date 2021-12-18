import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import styles from '../styles/index.module.css'
import {
    Flex,
    Text,
    Box,
    Button,
    Spacer,
    IconButton,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

export default function Navbar(params) {
    const router = useRouter();
    const [routes, setRoutes] = useState([
        {name: 'Inicio',path: '/'},
        {name: 'Proyectos',path: '/proyectos'},
        {name: 'Contactame',path: '/contactame'}
    ])

    const {darkmode, setDarkmode } = useDarkMode()

    return (
        <Box
            className={styles.navbar}
            position={'fixed'}
            width={'full'}
            bg={darkmode ? 'blackAlpha.900' : 'gray.50'}
            opacity={0.95}
            py={3}
            px={4}
            zIndex={10}
        >
            <Text color={darkmode ? 'gray.200' : 'blackAlpha.600'} fontSize={'3xl'}>Portfolio</Text>
            <Spacer />
            <Flex className='links' gap={3}>
                {
                    routes.map((route) => { 
                        return (
                            <Button
                                key={ route.name }
                                onClick={() => { router.push(route.path) }}
                                borderWidth={1}
                                colorScheme={!darkmode ? 'blue' : 'yellow'}
                                variant={'outline'}
                                >
                                {route.name}
                            </Button>
                        )
                    })
                }
                <motion.div
                    whileTap={{
                        transition: .5,
                        translateX: 5,
                        opacity: 0
                    }}
                >
                <IconButton
                    onClick={ ()=>{ setDarkmode(!darkmode) } }
                    colorScheme={darkmode ? 'yellow' : 'blue'}
                    color={'white'}
                    icon={
                        darkmode
                        ? <SunIcon />
                        : <MoonIcon />
                    }
                />
                </motion.div>
            </Flex>
        </Box>
    )
}