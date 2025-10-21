import { useEffect } from 'react';
import styled from 'styled-components';
import csImage from '../assets/images/cs.png';

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

const TextContainer = styled.div`
  padding: 2%;
  background-color: #f4f4f4;
  border-left: 5px solid;
  border-color: #64b5f6;
  width: 60%;
  color: black;
`;

const ImageContainer = styled.div`
  width: 35%;
  padding: 1%;

  img {
    max-width: 100%;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: calc(6px + 1.5vw);
  margin-top: 0.5%;
  padding-bottom: 0.5%;
  color: black;
`;

const Description = styled.p`
  font-size: calc(1px + 1.1vw);
  line-height: calc(6px + 1.2vw);
  margin: 0;

  @media screen and (max-width: 750px) {
    font-size: calc(4px + 2vw);
    line-height: calc(8px + 2vw);
  }
`;

const Paragraph = styled.p`
  font-size: calc(1px + 1.1vw);
  line-height: calc(6px + 1.2vw);
  margin: 0;

  @media screen and (max-width: 750px) {
    font-size: calc(4px + 2vw);
    line-height: calc(8px + 2vw);
  }
`;

const Skills = () => {
  useEffect(() => {
    document.title = 'Skills | BU CS391 Resume (MP3)';
  }, []);

  return (
    <WhiteBox>
      <ContentContainer>
        <ImageContainer>
          <img src={csImage} alt="Image of Raymond Greenberg in a Tuxedo" />
        </ImageContainer>
        <TextContainer>
          <PageTitle>Skills</PageTitle>
          <br />
          <Description>
            I have developed a comprehensive skill set through academic coursework, internships, and hands-on projects. My expertise combines strong programming fundamentals with advanced data science and analytics capabilities.
          </Description>
          <br />
          <Paragraph><strong>Programming Languages:</strong></Paragraph>
          <Paragraph>Java, Python, JavaScript, Go, OCaml, HTML, CSS</Paragraph>
          <br />
          <Paragraph><strong>Data & Analytics:</strong></Paragraph>
          <Paragraph>Data Science, Data Analytics, Data Visualization, Data Engineering, Business Intelligence, Machine Learning, Statistics</Paragraph>
          <br />
          <Paragraph><strong>Databases & Cloud:</strong></Paragraph>
          <Paragraph>SQL, MongoDB, Azure, AWS</Paragraph>

        </TextContainer>
      </ContentContainer>
    </WhiteBox>
  );
};

export default Skills;
