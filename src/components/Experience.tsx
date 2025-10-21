import { useEffect } from 'react';
import styled from 'styled-components';
import pfImage from '../assets/images/pf3.png';

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
  padding-left: 5%;
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

const ExperienceList = styled.ul`
  li {
    padding-top: 1%;
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

const Experience = () => {
  useEffect(() => {
    document.title = 'Experience | BU CS391 Resume (MP3)';
  }, []);

  return (
    <WhiteBox>
      <ContentContainer>
        <ImageContainer>
          <img src={pfImage} alt="Image of a New York City office building" />
        </ImageContainer>
        <TextContainer>
          <PageTitle>Experience</PageTitle>
          <br />
          <Paragraph><strong>Prime Finance - Machine Learning Engineer Intern</strong></Paragraph>
          <ExperienceList>
            <li><strong>Location:</strong> New York, NY</li>
            <li><strong>Duration:</strong> May 2025 - August 2025</li>
            <li>Designed and implemented an AI-powered loan prioritization system to score hundreds of real estate deals weekly.</li>
          </ExperienceList>
          <br />
          <Paragraph><strong>The Bespoke Banker - Client Engagement and Financial Analysis Intern</strong></Paragraph>
          <ExperienceList>
            <li><strong>Location:</strong> New York, NY</li>
            <li><strong>Duration:</strong> July 2023 - August 2023</li>
            <li>Directly consulted with clients to understand their borrowing needs before conducting an in-depth analysis of their financial spreads.</li>
          </ExperienceList>
        </TextContainer>
      </ContentContainer>
    </WhiteBox>
  );
};

export default Experience;
