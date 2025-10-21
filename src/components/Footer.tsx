import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 1.1%;
  background-color: #bbdefb;
  position: fixed;
  left: 0; /*added this to make the footer stay fixed*/
  bottom: 0; /*added this to make the footer stay fixed*/
  width: 100%;

  @media screen and (max-width: 750px) {
    font-size: calc(2px + 2vw);
  }
`;

const FooterText = styled.p`
  margin: 0;
  color: black;
`;

const FooterLink = styled.a`
  color: #646cff;
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>All Rights Reserved by Raymond Greenberg <FooterLink href="">Credits ©</FooterLink></FooterText>
    </StyledFooter>
  );
};

export default Footer;