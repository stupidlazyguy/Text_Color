import React from 'react';

class BoxColor extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<div className="col-2 col-xl-2 Box-Color" style={{backgroundColor:this.props.color}}></div>)
    }
}

export default BoxColor