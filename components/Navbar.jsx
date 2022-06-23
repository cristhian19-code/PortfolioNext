import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import {
    Flex,
    Text,
    Button,
    IconButton,
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

export default function Navbar() {
    const router = useRouter();
    const { darkmode, setDarkmode } = useDarkMode()

    const [routes, setRoutes] = useState([
        { name: 'Inicio', path: '/' },
        { name: 'Proyectos', path: '/proyectos' },
    ])

    return (
        <motion.div
            initial={{ width: '100%', zIndex: 10, position: 'fixed', y: -410 }}
            animate={{ y: 0 }}>
            <Flex
                position={'fixed'}
                width={'full'}
                alignItems={'center'}
                direction={['row']}
                bg={darkmode ? 'blackAlpha.900' : 'white'}
                shadow={'sm'}
                justifyContent={'end'}
                opacity={0.95}
                py={3}
                px={4}
                zIndex={10}
            >
                {
                    <>
                        <Flex
                            className='links'
                            w={['full', 'full', 'auto', 'auto']}
                            direction={['row']}
                            gap={3}
                        >
                            {
                                routes.map((route) => {
                                    return (
                                        <Button
                                            key={route.name}
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
                                    onClick={() => {
                                        localStorage.setItem('darkmode', !darkmode);
                                        setDarkmode(!darkmode)
                                    }}
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
                    </>
                }
            </Flex>
        </motion.div>
    )
}