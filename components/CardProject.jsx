import {
    Box,
    Image,
    Text,
    Button
} from '@chakra-ui/react'
import { useDarkMode } from '../hooks/useDarkMode'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const ButtonMotion = motion(Button)

export default function CardProject() {
    const { darkmode } = useDarkMode();
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
                    Dashboard Media
                </Text>
                <Text textAlign={'justify'} fontSize={12}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat tempora veritatis quo, nobis officia iste ea neque rerum, laboriosam veniam labore amet! Voluptates, saepe. Magnam voluptates itaque officiis fugit?</Text>
                <ButtonMotion
                    style={{ marginTop: 15 }}
                    opacity={1}
                    colorScheme={!darkmode ? 'blue' : 'yellow'}
                    variant={'outline'}
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
