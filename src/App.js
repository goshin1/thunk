import './App.css';
import React from 'react';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';
import {up} from './counterSlice';
import { asyncUpFetch } from './counterSlice';

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state=>{
    return state.counter.value;
  });
  const status = useSelector(state=>{
    return state.counter.status;
  });

  return <div>
    <button onClick={()=>{
      dispatch(up(2));
    }}>+</button>

    {<button onClick={()=>{
      dispatch(asyncUpFetch());
    }}>+ async fetch</button>}


    <div>{count} | {status}</div>
  </div>
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
