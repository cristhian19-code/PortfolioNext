import {
    faVuejs,
    faReact,
    faHtml5,
    faCss3,
    faJs,
    faBootstrap,
    faFigma,
} from '@fortawesome/free-brands-svg-icons'
import FontAWItem from './FontAWItem'

import { Flex } from '@chakra-ui/react'
import { useState } from 'react'

export default function FontAWList() {
    const [icons, setIcons] = useState([
        {name: 'html5',icon: faHtml5, color: '#D35400'},
        {name: 'css3',icon: faCss3, color: '#3498DB'},
        {name: 'js',icon: faJs, color: '#F1C40F'},
        {name: 'vue',icon: faVuejs, color: '#28B463'},
        {name: 'react',icon: faReact, color: '#2471A3'},
        { name: 'bootstrap', icon: faBootstrap, color: '#7D3C98' },
        { name: 'figma', icon: faFigma, color: '#EA4C1D' },
    ])
    return (
        <Flex justifyContent={'center'} gap={5} mt={5}>
            {
                icons.map(icon => {
                    return (
                        <FontAWItem key={icon.name} icon={icon}/>
                    )
                })
            }
        </Flex>
    )
}