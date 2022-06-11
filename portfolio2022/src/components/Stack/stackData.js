//Logo stack
import {SiMongodb, SiExpress} from 'react-icons/si'
import {FaReact, FaNodeJs} from 'react-icons/fa'
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io'
import {RiHtml5Line} from 'react-icons/ri'



export const stackObject = {
    description: '',
    frontend: [],
    backend: [],
    stack: [
        {
          logo: <RiHtml5Line />,
          name: 'HTML5',
        },
        {
          logo: <SiMongodb/>,
          name: 'MONGODB',
        },
        {
          logo: <FaReact/>,
          name: 'React',
        },
        {
          logo: <FaNodeJs/>,
          name: 'NodeJS',
        },
        {
          logo: <SiExpress/>,
          name: 'ExpressJS',
        },
        {
          logo: <IoLogoCss3/>,
          name: 'CSS3',
        },
        {
          logo: <IoLogoJavascript/>,
          name: 'JavaScript',
        },
      ]
      
}

