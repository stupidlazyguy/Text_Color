import React from 'react';
import './App.css';
import BoxLeft from './Components/BoxLeft'
import BoxRight from './Components/BoxRight'
import ButtonResult from './Components/ButtonResult'
import ResultSpace from './Components/ResultSpace'
class App extends React.Component{
  constructor(){
    super()
    this.state = {color:['blue','red','yellow','green','orange','white','pink','black']}
    this.state.color.push('magenta')
    // console.log(this.state)
  }
  ongetColor(color){
        console.log(color)
  }
  render(){
    return (
      <div className="container">
        <h1>Text Color</h1>
        <div className="row">
          <BoxLeft colors={this.state.color} getColor={this.ongetColor}/>
          <BoxRight colors={this.state.color }/>
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
