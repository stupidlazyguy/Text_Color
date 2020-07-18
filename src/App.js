import React from 'react';
import './App.css';
import BoxLeft from './Components/BoxLeft'
import BoxRight from './Components/BoxRight'
import ButtonResult from './Components/ButtonResult'
import ResultSpace from './Components/ResultSpace'
class App extends React.Component{
  render(){
    return (
      <div className="container">
        <h1>Text Color</h1>
        <div className="row">
          <BoxLeft/>
          <BoxRight/>
        </div>
        <div className="row box_result d-flex border border-primary ">
          <ResultSpace/>
          <ButtonResult/>
        </div>
      </div>
    )
  }
}

export default App;
