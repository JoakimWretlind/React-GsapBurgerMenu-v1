import { Sections } from '../styles';
import styled from 'styled-components';

const ContactSection = styled.section`
    ${Sections};
    background: #000;
`

const Contact = () => {
    return (
        <>
            <ContactSection>
                <h1>Contact</h1>
            </ContactSection>
        </>
    )
}

export default Contact;