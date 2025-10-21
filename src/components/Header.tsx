import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #64b5f6;
  position: fixed; /*added this to make the header stay fixed*/
  width: 100%;
  padding: 0.5% 2%;
  text-align: left;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

const HeaderH1 = styled.h1`
  color: black;
`;

const HeaderP = styled.p`
  color: black;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderH1>Raymond Greenberg</HeaderH1>
      <HeaderP>My Online Resume</HeaderP>
    </StyledHeader>
  );
};

export default Header;