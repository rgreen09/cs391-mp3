import { useState } from 'react';

export const useCalculator = () => {
  const [inputOne, setInputOne] = useState<string>('');
  const [inputTwo, setInputTwo] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [outputColor, setOutputColor] = useState<string>('black');

  const displayResult = (num: number) => {
    if (num < 0) {
      setOutputColor('red');
    } else {
      setOutputColor('black');
    }
    setOutput(num.toString());
  };

  const performOperation = (operation: (a: number, b: number) => number) => {
    const num1 = parseFloat(inputOne);
    const num2 = parseFloat(inputTwo);
    
    if (isNaN(num1) || isNaN(num2)) {
      setOutput('Invalid input');
      setOutputColor('red');
      return;
    }
    
    const result = operation(num1, num2);
    displayResult(result);
  };

  const add = () => performOperation((a, b) => a + b);
  const subtract = () => performOperation((a, b) => a - b);
  const multiply = () => performOperation((a, b) => a * b);
  const divide = () => performOperation((a, b) => a / b);
  
  const power = () => {
    const num1 = parseFloat(inputOne);
    const num2 = parseFloat(inputTwo);
    
    if (isNaN(num1) || isNaN(num2)) {
      setOutput('Invalid input');
      setOutputColor('red');
      return;
    }
    
    let result = num1;
    for (let i = 1; i < num2; i++) {
      result *= num1;
    }
    displayResult(result);
  };

  const clear = () => {
    setInputOne('');
    setInputTwo('');
    setOutput('');
    setOutputColor('black');
  };

  return {
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
  };
};
