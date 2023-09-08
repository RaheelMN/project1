import { useState } from 'react';
import './App.css';

//react functional component
const Person = (props)=>{
  return (
    <>
    <h2>Employee Details</h2>
    <p> Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>City: {props.city}</p>
    </>
  )
} 

const Counter = ()=>{
  const [count, setCount]= useState(0);
  return(
     <>
      <button onClick={()=>setCount((preCount)=>preCount+1)}>+</button>
       <h3>{count}</h3>
       <button onClick={()=>setCount((preCount)=>preCount-1)}>-</button>
     </>
  )
}

const App=() =>{
  const name = 'Raheel'
  const isLogin = false;
  return (
    <div className="App">
      <h1> Hello World! </h1>
      <p> Welcome {isLogin ? name: <>guest</>}.</p>
      <Person name='raheel' age='44' city={'peshawar'}/>
      <Counter/>
    </div>
  );
}

export default App;
