import { Sections } from '../styles';
import styled from 'styled-components';

const EventsSection = styled.section`
    ${Sections};
    background: #333;
`

const Events = () => {
    return (
        <>
            < EventsSection>
                <h1>Events</h1>
            </ EventsSection>
        </>
    )
}

export default Events;