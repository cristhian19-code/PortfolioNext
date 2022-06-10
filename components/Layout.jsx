import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    Flex,
    IconButton
} from '@chakra-ui/react'

import { useDarkMode } from '../hooks/useDarkMode'
import useWindowDimensions from "../hooks/useWindowDimensions";
import Footer from './Footer'

const links = [
    { name: "Inicio", to: "/" },
    { name: "Proyectos", to: "/proyectos" },
];

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.8,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.8,
            staggerDirection: 1
        }
    }
};

export default function Layout({ children }) {
    const { darkmode } = useDarkMode();
    const { width } = useWindowDimensions();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div>
            {/* {
                width >= 768 ? (
                    <Navbar />
                ) : (<></>)
            } */}
            <Flex
                transition={'all 0.2s ease-in-out'}
                bgColor={darkmode ? 'blackAlpha.900' : 'white'}
                color={darkmode ? 'gray.300' : 'blackAlpha.800'}
                direction={'column'}
                alignItems={'center'}
                minH={'100vh'}
            >
                {children}

                {
                    width < 768 && (
                        <>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.aside
                                        initial={{ width: 0 }}
                                        style={{
                                            height: '100vh',
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            backgroundColor: 'black'
                                        }}
                                        animate={{
                                            width: '100vw'
                                        }}
                                        exit={{
                                            width: 0,
                                            transition: { delay: 0.8, duration: 0.8 }
                                        }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <motion.div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                height: '100%'
                                            }}
                                            className="container"
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            variants={sideVariants}
                                        >
                                            {links.map(({ name, to, id }) => (
                                                <motion.a
                                                    style={{
                                                        color: 'white',
                                                        fontSize: 30,
                                                        textAlign: 'center'
                                                    }}
                                                    variants={itemVariants}
                                                    key={id}
                                                    href={to}
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {name}
                                                </motion.a>
                                            ))}
                                        </motion.div>
                                    </motion.aside>
                                )}
                            </AnimatePresence>
                            <IconButton
                                position={'fixed'}
                                bottom="10px"
                                right="10px"
                                rounded={'full'} onClick={toggleMenu} alignSelf={'start'} icon={<HamburgerIcon />} colorScheme={'whatsapp'} />
                        </>
                    )
                }

                <Footer />
            </Flex>
        </div>
    )
}
