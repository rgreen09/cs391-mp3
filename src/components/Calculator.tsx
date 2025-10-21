import styled from 'styled-components';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorContainer = styled.div`
  padding: 3%;
  background-color: #f4f4f4;
  border-left: 5px solid;
  border-color: #64b5f6;
  width: 90%;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 30%;
  margin-top: 6%;
`;

const Input = styled.input`
  font-size: 1.5vw;
  padding: 1%;
  margin: 1%;
  border-radius: 5px;
  border: 1px solid #64b5f6;
  width: 50%;
  height: 70%;
  text-align: center;
  font-size: 3vw;
`;

const ButtonsDiv = styled.div`
  display: flex;
  padding-right: 5%;
  margin-top: 1%;
  margin-left: 8.5%;
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #64b5f6;
  border-radius: 5px;
  padding: 1%;
  margin: 1%;
  font-size: 1.5vw;
  width: 14%;
`;

const OutputDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6%;
`;

const Output = styled.p`
  font-size: 3vw;
  padding: 1%;
  border-radius: 5px;
  border: 1px solid #64b5f6;
  width: 100%;
  background-color: #cbcdce;
  text-align: center;
  margin-left: 1%;
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: calc(8px + 2vw);
  margin-top: 1%;
  padding-bottom: 1%;
  color: black;
`;

const Calculator = () => {
  const {
    inputOne,
    inputTwo,
    output,
    outputColor,
    setInputOne,
    setInputTwo,
    add,
    subtract,
    multiply,
    divide,
    power,
    clear
  } = useCalculator();

  return (
    <CalculatorContainer>
      <PageTitle>Calculator</PageTitle>

      <InputDiv>
        <Input 
          value={inputOne}
          onChange={(e) => setInputOne(e.target.value)}
        />
        <Input 
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
        />
      </InputDiv>

      <ButtonsDiv>
        <Button onClick={multiply}>×</Button>
        <Button onClick={subtract}>-</Button>
        <Button onClick={divide}>÷</Button>
        <Button onClick={power}>^</Button>
        <Button onClick={add}>+</Button>
        <Button onClick={clear}>Clear</Button>
      </ButtonsDiv>

      <OutputDiv>
        <Output style={{ color: outputColor }}>{output}</Output>
      </OutputDiv>
    </CalculatorContainer>
  );
};

export default Calculator;
