import { Sections } from '../styles';
import styled from 'styled-components';

const DrinkSection = styled.section`
    ${Sections};
    background: #555;
`

const Drinks = () => {
    return (
        <DrinkSection>
            <h1>Drinks</h1>
        </DrinkSection>
    )
}

export default Drinks;