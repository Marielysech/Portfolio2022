import {ImLinkedin} from 'react-icons/im'
import {AiFillGithub, AiFillIdcard} from 'react-icons/ai'



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
                icon: <AiFillIdcard/>
            },
        ],
    },

    Contact : [
        
    {
        title: "Email",
        contenu: "marielysech@gmail.com"
    }, 
    
    {
        title: "City",
        contenu: "Madrid"
    }
    ]

}