import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Calculator = () => {
  const dispatch = useDispatch();
  const num1 = useSelector(state => state.num1);
  const num2 = useSelector(state => state.num2);
  const result = useSelector(state => state.result);

  const handleNum1Change = (e) => {
    dispatch({ type: 'SET_NUM1', payload: e.target.value });
  };

  const handleNum2Change = (e) => {
    dispatch({ type: 'SET_NUM2', payload: e.target.value });
  };

  const handleAdd = () => {
    dispatch({ type: 'ADD' });
  };

  const handleSubtract = () => {
    dispatch({ type: 'SUBTRACT' });
  };

  const handleMultiply = () => {
    dispatch({ type: 'MULTIPLY' });
  };

  const handleDivide = () => {
    dispatch({ type: 'DIVIDE' });
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Введите первое число"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Введите второе число"
      />
      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
      </div>
      {result !== null && <h2>Результат: {result}</h2>}
    </div>
  );
};

export default Calculator;
