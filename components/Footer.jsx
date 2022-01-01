import { Flex, Link } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
    const [icons, setIcons] = useState([
        { icon: faDribbble, link: 'https://dribbble.com/Christian-code19', color: 'pink.400' },
        { icon: faGithub, link: 'https://github.com/cristhian19-code', color: 'gray.600' },
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/christian-ricardo-aponte-gutierrez-0a086a226/', color: 'blue.600' },

    ])

    return (
        <Flex marginTop={15} marginBottom={15} gap={4}>
            {
                icons.map((icon, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href={icon.link} target='_blank' color={icon.color}>
                            <FontAwesomeIcon cursor={'pointer'} icon={icon.icon} size={'lg'} />
                        </Link>
                    </motion.div>
                ))
            }
        </Flex>
    )
}