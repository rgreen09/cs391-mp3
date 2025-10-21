import { useEffect } from 'react';
import styled from 'styled-components';
import fintechImage from '../assets/images/fintech3.png';

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

const Paragraph = styled.p`
  font-size: calc(1px + 1.1vw);
  line-height: calc(6px + 1.2vw);
  margin: 0;

  @media screen and (max-width: 750px) {
    font-size: calc(4px + 2vw);
    line-height: calc(8px + 2vw);
  }
`;

const List = styled.ul`
  font-size: calc(1px + 1.1vw);
  line-height: calc(6px + 1.2vw);
  margin: 0;

  li {
    padding-bottom: 1%;
  }

  @media screen and (max-width: 750px) {
    font-size: calc(4px + 2vw);
    line-height: calc(8px + 2vw);
  }
`;

const StudentLeadership = () => {
  useEffect(() => {
    document.title = 'Student Leadership | BU CS391 Resume (MP3)';
  }, []);

  return (
    <WhiteBox>
      <ContentContainer>
        <ImageContainer>
          <img src={fintechImage} alt="Image of a phone with fintech written across the screen" />
        </ImageContainer>
        <TextContainer>
          <PageTitle>Student Leadership</PageTitle>
          <br />
          <Paragraph><strong>FinTech BU - Vice President</strong></Paragraph>
          <List>
            <li><strong>Location:</strong> Boston, MA</li>
            <li><strong>Duration:</strong> August 2023 - September 2024</li>
            <li>Orchestrated and co-led a series of professional workshops, including Python programming, resume building, and LinkedIn profile optimization, elevating the professional acumen of over 50 club members.</li>
            <li>Co-curated and assembled educational content for lectures, with fintech concepts such as blockchain and cryptocurrency, fostering a foundational understanding of fintech among members.</li>
          </List>
        </TextContainer>
      </ContentContainer>
    </WhiteBox>
  );
};

export default StudentLeadership;
