import React from 'react';
import BoxColor from '../Components/BoxColor'
class Box_Left extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    getBoxColor=(color)=>{
        this.props.getColor(color)
    }
    renderColor(){
        var colors = this.props.colors
        return colors.map((color,index)=>{
            return <BoxColor color={color} key={index} pick={color} getBox={this.getBoxColor}/>
        })
    }
    render(){
        return (<div className="col-6 col-xl-6 header" >
            <p style={{color:'red'}}>Box Color</p>
            <div className="container">
                <div className="row">
                   {this.renderColor()}
                </div>
            </div>
        </div>)
    }
}

export default Box_Left