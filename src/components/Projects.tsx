import { useEffect } from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';
import calcImage from '../assets/images/calc.jpg';

const WhiteBox = styled.div`
  background-color: white;
  padding: 1%;
  width: 90%;
  margin: auto auto 2% auto; /*added this to make the white box centered with bottom margin*/
  border-radius: 10px; /*added this to make the border look nice*/
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 35%;
  padding: 1%;

  img {
    max-width: 100%;
  }
`;

const CalcImageContainer = styled(ImageContainer)`
  img.calc-image {
    max-width: 85%;
    padding-left: 10%;
  }
`;

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | BU CS391 Resume (MP3)';
  }, []);

  return (
    <WhiteBox>
      <ContentContainer>
        <CalcImageContainer>
          <img src={calcImage} alt="Image of Raymond Greenberg in a Tuxedo" className="calc-image" />
        </CalcImageContainer>
        <Calculator />
      </ContentContainer>
    </WhiteBox>
  );
};

export default Projects;
