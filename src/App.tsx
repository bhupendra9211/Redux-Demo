import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment,decrement } from './redux/slices/counter';
import Component from './Component';

function App() {
  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <h1>count is {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <Component />
    </div>
  );
}

export default App;
