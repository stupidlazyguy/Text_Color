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
    this.state.pick='color'
    this.state.size=15
  }
  ongetColor=(color)=>{
     this.setState({pick:color})
  }
  ongetSize=(size)=>{
    this.setState({size:size})
  }
  render(){
    return (
      <div className="container">
        <h1>Text Color</h1>
        <div className="row">
          <BoxLeft colors={this.state.color} getColor={this.ongetColor}/>
          <BoxRight colors={this.state.color} getSize={this.ongetSize}/>
        </div>
        <div className="row box_result d-flex border border-primary ">
          <ResultSpace color={this.state.pick} size={this.state.size}/>
          <ButtonResult/>
        </div>
      </div>
    )
  }
}

export default App;
