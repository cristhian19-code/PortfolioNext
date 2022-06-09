import Navbar from "./Navbar";
import {
    Container,
    Flex,
    IconButton
} from '@chakra-ui/react'
import Link from 'next/link'
import { useDarkMode } from '../hooks/useDarkMode'

import Footer from './Footer'
import useWindowDimensions from "../hooks/useWindowDimensions";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ContainerMotion = motion(Container)
const LinkMotion = motion(Link)

export default function Layout({ children }) {
    const { darkmode } = useDarkMode();
    const { width } = useWindowDimensions();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // useEffect(() => {
    //     if (width >= 768) {
    //         setIsOpen(true)
    //     }
    // }, [width])
    const navbarVariant = {
        close: {
            width: 0,
        },
        open: {
            width: '100%',
        },
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
                            <ContainerMotion
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                bg={'black'}
                                maxWidth={'100%'}
                                h={'100vh'}
                                variants={navbarVariant}
                                top={0}
                                left={0}
                                initial={false}
                                animate={isOpen ? 'open' : "close"}
                                transition={{
                                    duration: 0.3,
                                }}
                                position={'fixed'}
                                padding={0}
                            >
                                <ContainerMotion

                                >
                                    <LinkMotion href="/"><a style={{ fontSize: 30, color: 'white' }}>Inicio</a></LinkMotion>
                                    <LinkMotion href="/proyectos"><a style={{ fontSize: 30, color: 'white' }}>Proyectos</a></LinkMotion>
                                </ContainerMotion>
                            </ContainerMotion>
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
