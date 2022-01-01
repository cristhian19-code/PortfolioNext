import { Flex, Box, Link, Image, Text, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { useRouter } from 'next/router'
import styles from '../../styles/index.module.css'
import { useEffect, useState } from 'react'

export default function ID({ data }) {
    createBreakpoints({
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    })

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleLink = (link) => {
        route.push(link)
    }

    const route = useRouter()

    return(
        <Flex bgColor={'white'} padding={10} pt={20} height={'100vh'} display={'flex'} flexDirection={['column']} width={'full'} alignItems={'center'} justifyContent={'center'}>
            <Box flexShrink={0} width={['90%', '90%', '50%', '50%']}>
                <Image
                    borderRadius='lg'
                    src={data.img}
                    width={'100%'}
                    shadow={'md'}
                    alt='Woman paying for a purchase'
                />
            </Box>
            {
                isMounted ? (
                    <Box padding={8} width={['100%']}>
                        <Text
                            fontWeight='bold'
                            textTransform='uppercase'
                            fontSize='sm'
                            letterSpacing='wide'
                            color='teal.600'
                        >
                            {data.category}
                        </Text>
                        <Link
                            mt={1}
                            display='block'
                            fontSize='lg'
                            lineHeight='normal'
                            fontWeight='semibold'
                            href='#'
                            color='gray.500'
                        >
                            {data.title}
                        </Link>
                        <Text className={styles.description} color='gray.500' dangerouslySetInnerHTML={{ __html: data.description }} textAlign={'justify'} fontSize={12}></Text>
                        <Flex gap={5} marginTop={5}>
                            <Button color={'white'} onClick={() => { handleLink('/proyectos') }} _hover={{ bgColor: 'blue.400' }} bgColor={'blue.500'}>Volver</Button>
                            <Button color={'white'} onClick={() => { handleLink(data.link) }} _hover={{ bgColor: 'teal.400' }} bgColor={'teal.500'}>Ir <ExternalLinkIcon marginLeft={2} fontSize={15} /></Button>
                        </Flex>
                    </Box>
                ) : null
            }
        </Flex>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://upload-projects.herokuapp.com/api/projects', {
        method: 'GET'
    });

    const projects = await res.json();
    const listParams = projects.data.map(project => {
        return {
            params: { id: project._id }
        }
    })
    return {
        paths: listParams,
        fallback: false
    }
}

export async function getStaticProps({ params: { id } }) {
    const res = await fetch(`https://upload-projects.herokuapp.com/api/project/${id}`, {
        method: 'GET'
    });

    const project = await res.json();
    return {
        props: {
            data: project.data
        }
    }
}