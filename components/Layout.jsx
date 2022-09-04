import { useState } from "react";

import { Flex } from '@chakra-ui/react'

import useWindowDimensions from "../hooks/useWindowDimensions";
import Footer from './Footer'
import Sidebar from './Sidebar';
import Navbar from "./Navbar";

export default function Layout({ children }) {
    const { mobile } = useWindowDimensions();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div>
            {
                !mobile &&( <Navbar />)
            }
            <Flex
                transition={'all 0.2s ease-in-out'}
                bgColor={'black'}
                color={'white'}
                direction={'column'}
                alignItems={'center'}
                minH={'100vh'}
            >
                {children}

                {
                    mobile && (
                        <>
                            <Sidebar open={isOpen} />

                            <div onClick={toggleMenu} className={`burger ${isOpen ? 'active' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </>
                    )
                }

                <Footer />
            </Flex>
        </div>
    )
}
