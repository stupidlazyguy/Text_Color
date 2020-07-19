import React from 'react';

class BoxColor extends React.Component {
    // constructor(props){
    //     super(props)
    //     console.log(props.color)
    // }
    render() {
        return (<div onClick={() => this.props.getBox(this.props.pick)} className="col-2 col-xl-2 Box-Color" style={{ backgroundColor: this.props.color }}></div>)
    }
}

export default BoxColor