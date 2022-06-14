import {ImLinkedin} from 'react-icons/im'
import {AiFillGithub} from 'react-icons/ai'
import {BsFilePersonFill} from 'react-icons/bs'


export const footerData = {
    
    Links: {
        title: "Links",
        links: [
            {
                lien: "https://www.linkedin.com/in/marie-lyse-charriere/",
                icon: <ImLinkedin/>
            },
            {
                lien: "https://github.com/Marielysech",
                icon: <AiFillGithub/>
            },
            {
                lien: "https://drive.google.com/file/d/12iGuPsXfnjCMjhWU0BQyrbSTlBopZN4F/view?usp=sharing",
                icon: <BsFilePersonFill/>
            },
        ],
    },

    Contact : [
        
    {
        title: "Email",
        contenu: "marielysech@gmail.com"
    }, 
    
    {
        title: "Location",
        contenu: "Madrid, Spain"
    }
    ],

    copyRight: "Copyright ©2022 Marie-Lyse Charrière"

}