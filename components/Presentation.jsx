import { 
    Flex,
    Image,
    Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion' 
const ImageMotion = motion(Image)

export default function Presentation() {
    return (
      <Flex
        direction={'column'}
        alignItems={'center'}
        pt={20}
      >
        <Text
          fontSize={40}
          fontWeight={100}
        >
          Desarrollador Frontend
        </Text>
        <Text
          fontSize={20}
          fontWeight={'bold'}
        >
          <span>&#706;</span> Christian Ricardo <span>&#824;</span> <span>&#707;</span>
        </Text>
        <ImageMotion
          animate={{
            scale: [1, 1.1, 0.9, 1],
            borderRadius: ["30%", "50%", "40%", "20%"]
          }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05
          }}
          style={{cursor: 'pointer'}}
          borderRadius={'3xl'}
          height={250}
          width={250}
          my={10}
          src="/img/681ba850fb11e0d8641482a2ea5e0c87.jpg"
        />
      </Flex>
    )
}
