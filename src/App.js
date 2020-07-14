import React,{useState} from 'react';
import './App.css';
import Clock from './Components/Clock'
import ClockAuto from './Components/ClockAuto'
// LIFE CYCLE TEST
function App() {
  const [Show,setShow] = useState(true)
  const [Time,setTime] = useState([1,2,3,4])
  return (
    <div className="container">
      <Clock/>
      {Show ? <ClockAuto/> : null }
      {Show ?  <button className="btn btn-success" onClick={()=>setShow(false)}>Stop The Time</button> : ""}
      {!Show ? <button className="btn btn-success" onClick={()=>setShow(true)}>Stop The Time</button> : ""}
     
    </div>
  )
}

export default App;
