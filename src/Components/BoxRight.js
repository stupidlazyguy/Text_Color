import React from 'react';
class Box_Right extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    getColor=()=>{
        var color =  document.querySelector('.takeColor').value
        this.props.colors.push(color)
        console.log(this.props.colors)
    }
    setColor(){
        return 'color'
    }
    render(){
        return (<div className="col-6 col-xl-6 header" >
             <p style={{color:'pink',fontSize:20}}>Input Color</p>
                <input type="text" className="takeColor"/>
                <input type="submit" onClick={this.getColor}/>
        </div>)
    }
}

export default Box_Right