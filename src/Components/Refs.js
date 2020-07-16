import React from 'react'


class Refs extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>{this.props.children}</div>
    }
}


export default Refs