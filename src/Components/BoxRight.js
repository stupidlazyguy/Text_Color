import React from 'react';
class Box_Right extends React.Component{
    constructor(props){
        super(props)
        this.state ={max:50,min:10}
    }
    getColor=()=>{
        var size =  document.querySelector('.takeColor').value
        if(size>=this.state.min && size<=this.state.max){
            this.props.getSize(size)
        }
    }
    setColor(){
        return 'color'
    }
    render(){
        return (<div className="col-6 col-xl-6 header" >
            <p style={{color:'pink',fontSize:20}}>Input Color</p>
                <label htmlFor="size"/> Put your size <br/>
                <input type="text" className="takeColor form-control" id="size"/>
                <input type="submit" onClick={this.getColor} className="btn btn-primary m-2"/>
            <p>Size min is {this.state.min} to max is {this.state.max}</p>
        </div>)
    }
}

export default Box_Right