import { createStore } from 'redux';

const initialState = {
  num1: '',
  num2: '',
  result: null,
};

const calculatorReducer = (state = initialState, action) => {
  if (action.type === 'SET_NUM1') {
    return { ...state, num1: action.payload };
  } else if (action.type === 'SET_NUM2') {
    return { ...state, num2: action.payload };
  } else if (action.type === 'ADD') {
    return { ...state, result: Number(state.num1) + Number(state.num2) };
  } else if (action.type === 'SUBTRACT') {
    return { ...state, result: Number(state.num1) - Number(state.num2) };
  } else if (action.type === 'MULTIPLY') {
    return { ...state, result: Number(state.num1) * Number(state.num2) };
  } else if (action.type === 'DIVIDE') {
    return { ...state, result: Number(state.num1) / Number(state.num2) };
  } else {
    return state;
  }
};

const store = createStore(calculatorReducer);

export default store;
