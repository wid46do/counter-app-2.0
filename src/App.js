import React, {useState} from 'react';
import './App.css';
import { FunctionalCounter } from './pages/FunctionalCounter';
// import Counter from './pages/ClassCounter';

function App() {
  //Declare the state and method, and also init the value of state
  let [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  return (
    <div className='container'>
      {/* <ClassCounter /> */}
       {/* Mengirim props berupa state dan methods dari App.js ke FunctionalCounter */}
      <FunctionalCounter count={count} inc={increment} dec={decrement}/>
    </div>
  );
}

export default App;
