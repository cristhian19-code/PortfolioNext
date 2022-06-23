import {
    Text,
    UnorderedList,
    ListItem,
    Flex
} from '@chakra-ui/react'

export default function Tachnologies({techno}) {
    return (
        <Flex mt={10} direction={'column'} alignItems={'center'} width={'50%'}>
            <Text fontSize={22} fontWeight={600}>{techno.name}</Text>
            <UnorderedList mt={5} ml={10}>
                {
                    techno.techno.map(item => {
                        return (
                            <ListItem key={ item } fontWeight={400} fontSize={15}>{item}</ListItem>
                        )
                    })
                }
            </UnorderedList>
        </Flex>
    )
}