import React from 'react'
import 'react-calendar/dist/Calendar.css'
import CheckIn from './CheckIn';
import CheckOut from './CheckOut';
import styled from 'styled-components';


function Reservation() {
  return (
    <Container>
        <CheckIn />
        <CheckOut />
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    justify-content:space-around;
`;

export default Reservation