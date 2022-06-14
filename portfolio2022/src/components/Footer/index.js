import { footerData } from "./data"
import { FooterSection, SectionContainer, FSmallSection, Title, Icons, CContent, SocialIcon, CopyRigth} from "./FooterElements"


export default function Footer() {
    return (
            <FooterSection>
                <SectionContainer>
                    <FSmallSection>
                        <Title>{footerData.Links.title}</Title>
                        <Icons>
                    {footerData.Links.links.map((item, index) => 
                        <SocialIcon key={index} href={item.lien} target="_blank">
                            {item.icon}
                        </SocialIcon> )}
                        </Icons>
                    </FSmallSection>
                    
                    {footerData.Contact.map((item, index) =>
                    <FSmallSection key={index}>
                        <Title>{item.title}</Title>
                        <CContent>{item.contenu}</CContent>
                    </FSmallSection> )}
                        
                </SectionContainer>

                <CopyRigth>{footerData.copyRight}</CopyRigth>
            </FooterSection>
    )
}