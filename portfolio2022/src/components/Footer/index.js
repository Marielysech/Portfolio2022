import { footerData } from "./data"
import { LinkContainer, IconSection, Link, Title, Contact, CContent } from "./FooterElements"


export default function Footer() {
    return (
            <LinkContainer>
                <IconSection>
                    <Link>
                        <Title>{footerData.Links.title}</Title>
                    {footerData.Links.links.map((item, index) => 
                        <a key={index} href={item.lien} target="_blank">
                            {item.icon}
                        </a> )
                    }
                    </Link>
                    <Contact>
                        <Title>{footerData.Contact.title}</Title>
                        <CContent>{footerData.Contact.contenu}</CContent>
                    </Contact>
                </IconSection>
               
            </LinkContainer>
    )
}