import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

export default function FontAWItem({icon}) {
    
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                rotateZ: 5
            }}
        >
            <FontAwesomeIcon
                color={icon.color}
                cursor={'pointer'}
                style={{ fontSize: 35 }}
                icon={icon.icon}
            />
        </motion.div>
    )
}