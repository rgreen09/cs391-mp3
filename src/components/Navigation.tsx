import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 20%;
  padding-left: 3%;
  margin-left: 1%;

  @media screen and (max-width: 750px) {
    width: 100%;
    margin: auto;
    margin-top: 2%;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding-top: 22%;
  padding-left: 0;
  margin-left: 0;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    padding: 0;
  }
`;

const NavItem = styled.li`
  padding: 7%;
  margin-bottom: 6%;
  background-color: #64b5f6;
  border-radius: 5px; /*added this to make the border look nice*/

  @media screen and (max-width: 750px) {
    width: 17%;
    margin: 0.3%;
    padding: 1%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff !important;
  display: block; /*added display block so that the links take up the entire width of the container*/
  text-align: center;

  &:hover {
    color: #ffffff !important;
    text-decoration: none;
  }

  @media screen and (max-width: 750px) {
    font-size: calc(2px + 2vw);
    padding: 10%;
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/education">Education</NavLink></NavItem>
        <NavItem><NavLink to="/experience">Experiences</NavLink></NavItem>
        <NavItem><NavLink to="/student-leadership">Leadership</NavLink></NavItem>
        <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
        <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Navigation;