import Navbar from "./Navbar";
import {
    Flex,
    IconButton
} from '@chakra-ui/react'
import { useDarkMode } from '../hooks/useDarkMode'

import Presentation from '../components/Presentation'
import Footer from './Footer'
import useWindowDimensions from "../hooks/useWindowDimensions";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { useEffect } from "react";

export default function Layout({ children }) {
    const { darkmode } = useDarkMode();
    const { width } = useWindowDimensions();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (width >= 768) {
            setIsOpen(true)
        }
    }, [width])

    return (
        <div>
            <Navbar isOpen={isOpen} />
            <Flex
                transition={'all 0.2s ease-in-out'}
                bgColor={darkmode ? 'blackAlpha.900' : 'gray.100'}
                color={darkmode ? 'gray.300' :'blackAlpha.600'}
                direction={'column'}
                alignItems={'center'}
                minH={'100vh'}
            >
                <Presentation />
                
                {children}

                {
                    width < 768 && (
                        <IconButton position={'fixed'}
                            bottom={5}
                            rounded={'full'} right={5} onClick={toggleMenu} alignSelf={'start'} icon={<HamburgerIcon />} colorScheme={'whatsapp'} />
                    )
                }

                <Footer />
            </Flex>
        </div>
    )
}
