import React from 'react'
import styled from 'styled-components';


function Footer() {
  return (
    <FooterContainer>
        <FooterColumn class="footer-column-1">
            <h4>Get in Touch</h4>
            <p>Email:continental-contact@gmail.com</p>
            <p>Front Desk:703-444-4444</p>
            <p>Events: 703-422-2222</p>
            <p>La Trilogie: 703-113-1111</p>
        </FooterColumn>
        <FooterColumn class="footer-column-2">
            <h4>More Information</h4>
            <p>Privacy Policy</p>
            <p>About</p>
        </FooterColumn>
        <FooterColumn class="footer-column-3">
            <h4>Sister Properties</h4>
            <br />
            <p>Skypiercer</p>
        </FooterColumn>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    display:flex;
    background:black;
`;

const FooterColumn = styled.div`
    margin-right:370px;
    position:relative;
    left:150px;
    background:black;
    color:white;
`;

export default Footer;