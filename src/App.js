import React,{useState} from 'react';
import './App.css';
import Clock from './Components/Clock'
import ClockAuto from './Components/ClockAuto'
// LIFE CYCLE TEST
function App() {
  const [Show,setShow] = useState(1)
  return (
    <div className="container">
      <Clock/>
      {Show === 1 ? <ClockAuto/> : null }
      <button className="btn btn-success" onClick={()=>setShow(0)}>Stop The Time</button>
    </div>
  )
}

export default App;
