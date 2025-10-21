import { useEffect } from 'react';
import styled from 'styled-components';
import homeImage from '../assets/images/home_image.jpg';

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

const MainDescription = styled.p`
  margin-bottom: 1.1%;
  font-size: calc(1px + 1.2vw);
  line-height: calc(6px + 1.2vw);
  margin: 0;

  @media screen and (max-width: 750px) {
    font-size: calc(4px + 2vw);
    line-height: calc(8px + 2vw);
  }
`;

const Paragraph = styled.p`
  font-size: calc(1px + 1.2vw);
  line-height: calc(6px + 1.2vw);
  margin: 0;

  @media screen and (max-width: 750px) {
    font-size: calc(4px + 2vw);
    line-height: calc(8px + 2vw);
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = 'Home | BU CS391 Resume (MP3)';
  }, []);

  return (
    <WhiteBox>
      <ContentContainer>
        <ImageContainer>
          <img src={homeImage} alt="Image of Raymond Greenberg in a Tuxedo" />
        </ImageContainer>
        <TextContainer>
          <PageTitle>Home</PageTitle>
          <br />
          <MainDescription>
            I'm Raymond Greenberg, a senior at Boston University pursuing a dual degree in Business Administration
            and Computer Science. I'm passionate about the intersection of business and technology, and I'm
            actively seeking opportunities to apply my skills in data analytics and software development to
            solve complex business challenges.
          </MainDescription>
          <br />
          <Paragraph>Welcome to my website! Here you will find information about my work experiences, education, projects, and more.</Paragraph>
        </TextContainer>
      </ContentContainer>
    </WhiteBox>
  );
};

export default Home;
