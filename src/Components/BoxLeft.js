import React from 'react';
import BoxColor from '../Components/BoxColor'
class Box_Left extends React.Component{
    constructor(){
        super()
        this.state = {color:['red','blue']}
    }
    showColor(){
        return 
    }
    render(){
        return (<div className="col-6 col-xl-6 header" >
            <p style={{color:'red'}}>Box Color</p>
            <div className="container">
                <div className="row">
                   <BoxColor color='black'/>
                </div>
            </div>
        </div>)
    }
}

export default Box_Left