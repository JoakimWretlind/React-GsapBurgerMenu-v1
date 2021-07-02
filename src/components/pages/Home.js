import { Sections } from '../styles';
import styled from 'styled-components';

const HomeSection = styled.section`
    ${Sections};
    background: #777;
`

const Home = () => {
    return (
        <>
            <HomeSection>
                <h1>Home</h1>
            </HomeSection>
        </>
    )
}

export default Home;