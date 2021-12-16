import CardProject from "../components/CardProject"
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <motion.div
            initial={{ translateY: 50 ,opacity: 0}}
            animate={ {translateY: 0, opacity: 1}}
            transition={{duration: 1.5, ease: "easeOut"}}
        >
            <Flex
                justifyContent={'center'}
                gap={5}
                px={2}
                py={20}
                wrap={'wrap'}>
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </Flex>
        </motion.div>
    )
}