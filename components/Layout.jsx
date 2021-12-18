import Navbar from "./Navbar";
import {
  Flex,
} from '@chakra-ui/react'
import Presentation from '../components/Presentation'
import { useDarkMode } from '../hooks/useDarkMode'

export default function Layout({ children }) {
    const { darkmode } = useDarkMode();
    return (
        <div>
            <Navbar />
            <Flex
                bgColor={darkmode ? 'blackAlpha.900' : 'gray.100'}
                color={darkmode ? 'gray.300' :'blackAlpha.600'}
                direction={'column'}
                alignItems={'center'}
            >
                <Presentation />
                
                {children}
            </Flex>
        </div>
    )
}
