import { useEffect } from 'react';
import styled from 'styled-components';
import buImage from '../assets/images/bu1.png';

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

const DegreeList = styled.ol`
  font-size: calc(1px + 1.1vw);
  margin: 0;
  border: 1px solid #64b5f6;
  margin-right: 10%;
  margin-left: 10%;

  li {
    padding: 1.5%;
  }
`;

const InfoList = styled.ul`
  font-size: calc(1px + 1.1vw);
  margin: 0;

  li {
    padding-bottom: 1.5%;
  }
`;

const Education = () => {
  useEffect(() => {
    document.title = 'Education | BU CS391 Resume (MP3)';
  }, []);

  return (
    <WhiteBox>
      <ContentContainer>
        <ImageContainer>
          <img src={buImage} alt="Image of Boston University Campus from above" />
        </ImageContainer>
        <TextContainer>
          <PageTitle>Education: Boston University</PageTitle>
          <br /><br />
          <DegreeList>
            <li>Bachelor's of Science in Business Administration</li>
            <li>Bachelor's of Arts in Computer Science</li>
          </DegreeList>
          <br />
          <InfoList>
            <li>Cumulative GPA: 3.8</li>
            <li>Graduation Date: December 2025</li>
            <li>Relevant Coursework: Business Analytics, Software Engineering, Machine Learning, Database Systems, Computer Systems</li>
          </InfoList>
        </TextContainer>
      </ContentContainer>
    </WhiteBox>
  );
};

export default Education;
